import discord
from discord.ext import commands
from utils.fetch_from import fetch_from
import io
from PIL import ImageFont, Image, ImageDraw
import tempfile
from utils.format_mc import render_mc

class Hypixel(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.group(aliases=["h", "mc", "minecraft"])
    async def hypixel(self, ctx):
        if not ctx.invoked_subcommand:
            await ctx.send_group_help(self.hypixel)

    @hypixel.command(aliases=["p", "person"])
    async def player(self, ctx, name):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/hypixel/player/{name}"
            data = await fetch_from(url, self.bot)
            
            embed = discord.Embed()
            embed.colour = self.bot.colour
            embed.title = f"Statistics deck of {data['name']} ({data['tag']})"
            embed.description = f"All of the stats you need to know about {data['displayName']} on , provided by [statgames](https://statgames.net)"
            embed.set_image(url="attachment://fancy.png")
            im = self.generate_player({})
            with io.BytesIO() as output:
                im.save(output, format="JPEG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    def generate_player(self, data):
        bg = Image.open("./assets/minecraft.jpg")
        bg_layer = Image.new("RGBA", bg.size, color=(24, 24, 24, 240))
        bg.paste(bg_layer, (0, 0), bg_layer)
        draw = ImageDraw.Draw(bg)
        fontcolour = (244, 244, 244, 255)
        o = 40
        big = ImageFont.truetype("./assets/font.ttf", int(1.5*o))
        medium = ImageFont.truetype("./assets/font.ttf", int(1.25*o))
        small = ImageFont.truetype("./assets/font.ttf", o)
        verysmall = ImageFont.truetype("./assets/font.ttf", int(0.75*o))
        """
        url = "https://visage.surgeplay.com/full/%s" % data["uuid"]

        buffer = tempfile.SpooledTemporaryFile(max_size=1e9)
        async with self.bot.session.get(url) as resp:
            if resp.status != 200:
                raise Exception
            buffer.write(await resp.content.read())
            buffer.seek(0)
            im = Image.open(io.BytesIO(buffer.read()))
        bg.paste(im, (0,0), im)
        """
        render_mc(draw, "&4test&3cool", (o, o), 3*o)
        return bg

def setup(bot):
    cog = Hypixel(bot)
    cog.help_cmd = {
        "name": "Hypixel",
        "emoji": "<:minecraft:821312388027908097>",
        "description": "Statistics for Minecraft AkA hypixel!"
    }
    bot.add_cog(cog)

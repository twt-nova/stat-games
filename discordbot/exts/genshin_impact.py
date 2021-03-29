import discord
from discord.ext import commands
from utils import paimonutils as utils
from PIL import Image, ImageDraw, ImageFont
import io
import tempfile


class GenshinImpact(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(aliases=["gi", "g", "gensini", "gimpact", "gensinimpact"])
    async def genshin_impact(self, ctx, character: utils.get_character):
        async with ctx.typing():

            embed = discord.Embed()
            embed.colour = self.bot.colour
            embed.title = f"Statistics for {character['name']}"
            embed.description = f"All of the stats you need to know about {character['name']}, provided by [statgames](https://statgames.net)"
            embed.set_image(url="attachment://fancy.png")
            im = await self.generate_character(character)
            with io.BytesIO() as output:
                im.save(output, format="PNG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    async def generate_character(self, data):
        bg = Image.open("./assets/genshinimpact.jpg")
        bg_layer = Image.new("RGBA", bg.size, color=(24, 24, 24, 240))
        draw = ImageDraw.Draw(bg_layer)
        o = 60
        # This part was for making the border, which we decided to remove LLL
        # offset=15
        # draw.rectangle((offset,offset, bg.width - o, bg.height-o), fill=(24,24,24,240))
        fontcolour = (244, 244, 2444, 255)
        bg.paste(bg_layer, (0, 0), bg_layer)
        draw = ImageDraw.Draw(bg)
        big = ImageFont.truetype("./assets/font.ttf", int(1.5*o))
        small = ImageFont.truetype("./assets/font.ttf", o)
        draw.text((o, o), "Name", font=big, fill=fontcolour)
        draw.text((o, 4*o), str(data['name']), font=small, fill=fontcolour)
        draw.text((11*o, o), "Health", font=big, fill=fontcolour)
        draw.text((11*o, 4*o), str(data['hp']), font=small, fill=fontcolour)
        draw.text((19*o, o), "Attack", font=big, fill=fontcolour)
        draw.text((19*o, 4*o), str(data['attack']),
                  font=small, fill=fontcolour)
        draw.text((29*o, o), "Defence", font=big, fill=fontcolour)
        draw.text(
            (29*o, 4*o), str(data['defense']), font=small, fill=fontcolour)
        draw.text((o, 6.5*o), "Ascension stat", font=big, fill=fontcolour)
        draw.text((o, 10.5*o), str(data['ascension_stat']),
                  font=small, fill=fontcolour)
        draw.text((19*o, 6.5*o), "Ascension Stat Value", font=big, fill=fontcolour)
        draw.text((19*o, 10.5*o), str(data['ascension_stat_value']), font=small, fill=fontcolour)

        url = "https://rerollcdn.com/GENSHIN/Characters/%s.png" % data["name"]

        buffer = tempfile.SpooledTemporaryFile(max_size=1e9)
        r = 5
        async with self.bot.session.get(url) as resp:
            if resp.status != 200:
                raise Exception
            buffer.write(await resp.content.read())
            buffer.seek(0)
            im = Image.open(io.BytesIO(buffer.read()))
        im = im.resize((int(im.width*r), int(im.height*r)), Image.BOX)
        bg.paste(im, (int(12.5*o), int(15*o)))


        return bg


def setup(bot):
    bot.add_cog(GenshinImpact(bot))

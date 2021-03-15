import discord
from discord.ext import commands
from utils.fetch_from import fetch_from
from PIL import Image, ImageDraw, ImageFont
import io

def crtag(tag):  # from clash_royale pypi
    tag = tag.strip('#').upper().replace('O', '0')
    allowed = '0289PYLQGRJCUV'
    bad = []

    if not tag.startswith('%23'):
        tag = '%23' + tag

    for c in tag[3:]:
        if c not in allowed:
            bad.append(c)
    if bad:
        raise ValueError(
            'Invalid tag characters passed: {}'.format(', '.join(bad)))
    if len(tag[3:]) < 3:
        raise ValueError(
            'Tag ({}) too short, length {}, expected 3'.format(tag[3:], len(tag[3:])))
    return tag


class ClashRoyale(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.group(aliases=["clashroyale", "clashr", "cr", "croyale"],
                    description="See stats for Clash Royale!")
    async def clash_royale(self, ctx):
        if not ctx.invoked_subcommand:
            await ctx.send_group_help(self.clash_royale)

    @clash_royale.group(aliases=["p", "person"],
                        description="Get statistics for a certain player")
    async def player(self, ctx, tag: crtag):
        url = f"{self.bot.config['base_url']}/clash_royale/players/{tag}"
        data = await fetch_from(url, self.bot)
        embed = discord.Embed()
        embed.colour = self.bot.colour
        embed.title = f"Statistics for {data['name']} ({data['tag']})"
        embed.description = f"All of the stats you need to know about {data['name']}, provided by [statgames](https://statgames.net)"
        embed.set_image(url="attachment://fancy.png")
        im = self.generate_player(data)
        with io.BytesIO() as output:
            im.save(output, format="JPEG")
            output.seek(0)
            await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    def generate_player(self, data):
        bg = Image.open("./assets/clashbanner.jpg")
        white_layer = Image.new("RGBA", bg.size, color=(24,24,24,240))
        draw = ImageDraw.Draw(white_layer)
        o = 20
        offset=15
        # draw.rectangle((offset,offset, bg.width - o, bg.height-o), fill=(24,24,24,240))
        fontcolour = (244, 244, 2444,255)
        bg.paste(white_layer, (0,0), white_layer)
        draw = ImageDraw.Draw(bg)
        big = ImageFont.truetype("./assets/font.ttf", int(1.5*o))
        small = ImageFont.truetype("./assets/font.ttf", o)
        draw.text((2*o, 2*o), "Name", font=big, fill=fontcolour)
        draw.text((2*o, 4*o), str(data['name']), font=small, fill=fontcolour)
        draw.text((9*o, 2*o), "Tag", font=big, fill=fontcolour)
        draw.text((9*o, 4*o), str(data['tag']), font=small, fill=fontcolour)
        draw.text((16*o, 2*o), "Trophies", font=big, fill=fontcolour)
        draw.text((16*o, 4*o), str(data['trophies']), font=small, fill=fontcolour)
        draw.text((23*o, 2*o), "Best Trophies", font=big,fill=fontcolour)
        draw.text((23*o, 4*o), str(data['bestTrophies']), font=small, fill=fontcolour)
        draw.text((2*o, 6*o), "Level", font=big, fill=fontcolour)
        draw.text((2*o, 8*o), str(data['expLevel']), font=small, fill=fontcolour)
        return bg

def setup(bot):
    Cog = ClashRoyale(bot)
    Cog.help_cmd = {
        "name": "Clash Royale",
        "emoji": "<:clashroyale:820959551821971466>",
        "description": "Check and See your stats for clash royale"
    }
    bot.add_cog(Cog)

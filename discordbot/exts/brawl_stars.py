import discord
from discord.ext import commands
from utils.fetch_from import fetch_from
from PIL import Image, ImageDraw, ImageFont
import io
from utils import charts
import tempfile

def bstag(tag):  # from clash_royale pypi
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


class BrawlStars(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.group(aliases=["brawlstars", "brawls", "bs", "bstars"],
                    description="See stats for Clash Royale!")
    async def brawl_stars(self, ctx):
        if not ctx.invoked_subcommand:
            await ctx.send_help(self.brawl_stars)

    @brawl_stars.command(aliases=["p", "person"],
                         description="Get statistics for a certain player")
    async def player(self, ctx, tag:bstag):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/brawl_stars/player/{tag}"
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

    def generate_player(self, data, logdata):
        bg = Image.open("./assets/brawlstars.jpg")
        bg_layer = Image.new("RGBA", bg.size, color=(24, 24, 24, 240))
        draw = ImageDraw.Draw(bg_layer)
        o = 35
        fontcolour = (244, 244, 2444, 255)
        bg.paste(bg_layer, (0, 0), bg_layer)
        draw = ImageDraw.Draw(bg)
        big = ImageFont.truetype("./assets/font.ttf", int(1.5*o))
        small = ImageFont.truetype("./assets/font.ttf", o)
        draw.text((o, o), "Name", font=big, fill=fontcolour)
        draw.text((o, 3*o), str(data['name']), font=small, fill=fontcolour)
        draw.text((9*o, o), "Tag", font=big, fill=fontcolour)
        draw.text((9*o, 3*o), str(data['tag']), font=small, fill=fontcolour)
        draw.text((16*o, o), "Trophies", font=big, fill=fontcolour)
        draw.text((16*o, 3*o), str(data['trophies']),
                  font=small, fill=fontcolour)
        draw.text((24*o, o), "Best Trophies", font=big, fill=fontcolour)
        draw.text(
            (24*o, 3*o), str(data['highestTrophies']), font=small, fill=fontcolour)
        draw.text((o, 5.5*o), "Level", font=big, fill=fontcolour)
        draw.text((o, 7.5*o), str(data['expLevel']),
                  font=small, fill=fontcolour)
        draw.text((9*o, 5.5*o), "Wins", font=big, fill=fontcolour)
        draw.text((9*o, 7.5*o), str(data['3vs3Victories'] + data["soloVictories"] + data["duoVictories"]), font=small, fill=fontcolour)
        draw.text((16*o, 5.5*o), "Expireince", font=big, fill=fontcolour)
        draw.text((16*o, 7.5*o),
                  str(data['expPoints']), font=small, fill=fontcolour)
        draw.text((24*o, 5.5*o), "Club", font=big, fill=fontcolour)
        draw.text((24*o, 7.5*o), str(data['club']['name'] if data["club"]
                                     != {} else "No Club"), font=small, fill=fontcolour)

        
        wlchart = charts.create_pie_chart(
            ("Solo\nWins", "Duo\nWins", "3v3\nWins"), (data["soloVictories"], data["duoVictories"], data["3vs3Victories"]), (0, 0, 0), colours=((1, 0, 0), (0, 0, 1), (0, 1, 0)), rotation=30)
        r = 0.85 # scaleing factor
        wlchart = wlchart.resize(
            (int(wlchart.width*r), int(wlchart.height*r)), Image.NEAREST)
        bg.paste(wlchart, (int(15*o), int(8*o)), wlchart)  # noice 6.9
        
        trophie_changes = [0-i if i["battle"]["result"] == "defeat" else i for i in logdata]

        brawlers = charts.create_line_graph("Trophies", "Battle", )
        r = .85 # scaleing factor
        brawlers = brawlers.resize(
            (int(brawlers.width*r), int(brawlers.height*r)), Image.BOX)
        bg.paste(brawlers, (int(0.5*o), int(8*o)),
                 brawlers)  



        return bg


def setup(bot):
    Cog = BrawlStars(bot)
    Cog.help_cmd = {
        "name": "Brawl Stars",
        "emoji": "<:brawl_stars:821312387910205454>",
        "description": "Check and See your stats for Brawl Stars!"
    }
    bot.add_cog(Cog)

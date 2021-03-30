import discord
from discord.ext import commands
from utils.fetch_from import fetch_from
import io
from PIL import ImageFont, Image, ImageDraw, ImageOps
from utils import charts


class Stats(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(aliases=["s", "stat"])
    async def stats(self, ctx):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/stats"
            data = await fetch_from(url, self.bot)
            embed = discord.Embed()
            embed.colour = self.bot.colour
            embed.title = f"Bot Statistics"
            embed.description = f"All of the stats you need to know about our bot (and website)!"
            embed.set_image(url="attachment://fancy.png")
            im = self.generate_stats_image(data)
            with io.BytesIO() as output:
                im.save(output, format="JPEG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)


    def generate_stats_image(self, stats):
        bg = Image.new("RGB", (1920, 1080), color=(24, 24, 24))

        draw = ImageDraw.Draw(bg)
        o = 50

        big = ImageFont.truetype("./assets/font.ttf", int(1.5*o))
        small = ImageFont.truetype("./assets/font.ttf", o)

        fontcolour = (244, 244, 244)

        topgame = sorted(stats["games"], key=lambda i : i["amount"], reverse=True)[0]

        draw.text((o, o), "Total Requests", font=big, fill=fontcolour)
        draw.text((o, 3*o), str(stats['total']), font=small, fill=fontcolour)
        draw.text((15*o, o), "Top Game", font=big, fill=fontcolour)
        draw.text((15*o, 3*o), str(topgame["name"].replace("_", " ").capitalize()), font=small, fill=fontcolour)


        gamingchart = charts.create_pie_chart([i["name"].replace("_", " ").capitalize() for i in stats["games"]], [i["amount"] for i in stats["games"]])
        r = 1.69 #scaling factor ting (69 noice)
        gamingchart = gamingchart.resize(
            (int(gamingchart.width*r), int(gamingchart.height*r)), Image.NEAREST)
        bg.paste(gamingchart, (int(o), int(7*o)), gamingchart)

        return bg


def setup(bot):
    bot.add_cog(Stats(bot))

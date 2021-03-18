import discord
from discord.ext import commands
from utils.fetch_from import fetch_from
import io
from PIL import ImageFont, Image, ImageDraw, ImageOps
import tempfile
from utils.format_mc import render_mc
from utils import charts

def to_str(num):
    if num < 1000:
        return str(num)
    if num < 100000:
        x = num/1000
        x = round(x, 1)
        return str(x) + "K"
    x = num/1000000
    x = round(x, 2)
    return str(x) + "M"


def render_level_and_ign(data, draw, o):

    render_mc(
        draw, f"&eLevel: &a{int(data['networkLevel'])}", (35*o, 3*o), int(1.5*o))
    p = -0.7 * len(f"{data['prefix']} {data['displayName']}") + 46
    render_mc(
        draw, f"{data['prefix']} {data['displayName']}", (p*o, 6*o), int(1.4*o))



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
            embed.title = f"Statistics of {data['displayName']}"
            embed.description = f"All of the stats you need to know about {data['displayName']} on hypixel, provided by [statgames](https://statgames.net)"
            embed.set_image(url="attachment://fancy.png")
            im = await self.generate_player(data)
            with io.BytesIO() as output:
                im.save(output, format="JPEG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    @hypixel.command(aliases=["b", "bw"])
    async def bedwars(self, ctx, name):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/hypixel/player/{name}/bedwars"
            bw = await fetch_from(url, self.bot)
            url = f"{self.bot.config['base_url']}/hypixel/player/{name}/"
            player = await fetch_from(url, self.bot)
            embed = discord.Embed()
            embed.colour = self.bot.colour
            embed.title = f"Statistics of {player['displayName']}"
            embed.description = f"All of the stats you need to know about {player['displayName']} on hypixel, provided by [statgames](https://statgames.net)"
            embed.set_image(url="attachment://fancy.png")
            im = await self.generate_player_bw(bw, player)
            with io.BytesIO() as output:
                im.save(output, format="JPEG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    async def generate_player_bw(self, bw, player):
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

        url = "https://visage.surgeplay.com/bust/%s" % player["uuid"]

        s = 2.75  # scale factor

        buffer = tempfile.SpooledTemporaryFile(max_size=1e9)
        async with self.bot.session.get(url) as resp:
            if resp.status != 200:
                raise Exception
            buffer.write(await resp.content.read())
            buffer.seek(0)
            im = Image.open(io.BytesIO(buffer.read()))
        im = im.resize((int(im.width * s), int(im.height * s)), Image.BOX)
        im = ImageOps.mirror(im)
        bg.paste(im, (30*o, int(9.5*o)), im)

        draw.text((o, o), "Wins", font=big, fill=fontcolour)
        draw.text((o, 3*o), to_str(bw['overall']['wins_bedwars']), font=small, fill=fontcolour)
        draw.text((8*o, o), "Losses", font=big, fill=fontcolour)
        draw.text((8*o, 3*o), to_str(bw['overall']['losses_bedwars']),
                  font=small, fill=fontcolour)
        draw.text((17*o, o), "Bedwars Level", font=big, fill=fontcolour)
        draw.text((17*o, 3*o), to_str(player['info']["bedwars"]["level"]),
                  font=small, fill=fontcolour)
        draw.text((o, 5.5*o), "Total Kills", font=big, fill=fontcolour)
        draw.text((o, 7.5*o), str(bw["overall"]["kills_bedwars"]),
                  font=small, fill=fontcolour)
        draw.text((8*o, 5.5*o), "Final Kills", font=big, fill=fontcolour)
        draw.text((8*o, 7.5*o), str(bw["overall"]["final_kills_bedwars"]),
                  font=small, fill=fontcolour)
        draw.text((17*o, 5.5*o), "Final Deaths",
                  font=big, fill=fontcolour)
        draw.text((17*o, 7.5*o), str(bw["overall"]["final_deaths_bedwars"]),
                  font=small, fill=fontcolour)

        render_level_and_ign(player, draw, o)

        r = 0.9  # scaleing factor
        wlchart = charts.create_pie_chart(
            ("Wins", "Losses"), (bw['overall']['wins_bedwars'], bw['overall']['losses_bedwars']), (0, 0), colours=((.3, .3, 1), (1, .3, .3)))
        wlchart = wlchart.resize(
            (int(wlchart.width*r), int(wlchart.height*r)), Image.NEAREST)
        bg.paste(wlchart, (int(0*o), int(10*o)), wlchart)  # noice 9.6        
        fkdrchart = charts.create_pie_chart(
            ("Final\nKills", "Final\nDeaths"), (bw['overall']['final_kills_bedwars'], bw['overall']['final_deaths_bedwars']), (0, 0), colours=((.3, .3, 1), (1, .3, .3)))
        fkdrchart = fkdrchart.resize(
            (int(fkdrchart.width*r), int(fkdrchart.height*r)), Image.NEAREST)
        bg.paste(fkdrchart, (int(15*o), int(10*o)), fkdrchart)  # noice 9.6
        kdrchart = charts.create_pie_chart(
            ("Total\nKills", "Total\nDeaths"), (bw['overall']['kills_bedwars'], bw['overall']['deaths_bedwars']), (0, 0), colours=((.3, .3, 1), (1, .3, .3)), rotation=40)
        kdrchart = kdrchart.resize(
            (int(kdrchart.width*r), int(kdrchart.height*r)), Image.NEAREST)
        bg.paste(kdrchart, (int(8*o), int(17*o)), kdrchart)  # noice 9.6

        return bg



    async def generate_player(self, data):
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

        url = "https://visage.surgeplay.com/bust/%s" % data["uuid"]

        s = 2.75  # scale factor

        buffer = tempfile.SpooledTemporaryFile(max_size=1e9)
        async with self.bot.session.get(url) as resp:
            if resp.status != 200:
                raise Exception
            buffer.write(await resp.content.read())
            buffer.seek(0)
            im = Image.open(io.BytesIO(buffer.read()))
        im = im.resize((int(im.width * s), int(im.height * s)), Image.BOX)
        im = ImageOps.mirror(im)
        bg.paste(im, (30*o, int(9.5*o)), im)
        draw.text((o, o), "Karma", font=big, fill=fontcolour)
        draw.text((o, 3*o), to_str(data['karma']), font=small, fill=fontcolour)
        draw.text((8*o, o), "Experience", font=big, fill=fontcolour)
        draw.text((8*o, 3*o), to_str(data['networkExp']),
                  font=small, fill=fontcolour)
        draw.text((17*o, o), "Achivement Points", font=big, fill=fontcolour)
        draw.text((17*o, 3*o), to_str(data['achievementPoints']),
                  font=small, fill=fontcolour)
        draw.text((o, 5.5*o), "Version", font=big, fill=fontcolour)
        draw.text((o, 7.5*o), str(data.get('mcVersion', "Unknown")),
                  font=small, fill=fontcolour)
        draw.text((8*o, 5.5*o), "Total Wins", font=big, fill=fontcolour)
        draw.text((8*o, 7.5*o), str(data["totalWins"]),
                  font=small, fill=fontcolour)
        draw.text((17*o, 5.5*o), "Total Losses",
                  font=big, fill=fontcolour)
        draw.text((17*o, 7.5*o), str(data["totalLosses"]),
                  font=small, fill=fontcolour)
                  
        render_level_and_ign(data, draw, o)

        wlchart = charts.create_pie_chart(
            ("Wins", "Losses"), (data["totalWins"], data["totalLosses"]), (0, 0), colours=((.3, .3, 1), (1, .3, .3)))
        r = 1.5  # scaleing factor
        wlchart = wlchart.resize(
            (int(wlchart.width*r), int(wlchart.height*r)), Image.NEAREST)
        bg.paste(wlchart, (int(2*o), int(9.6*o)), wlchart)  # noice 9.6

        return bg


def setup(bot):
    cog = Hypixel(bot)
    cog.help_cmd = {
        "name": "Hypixel",
        "emoji": "<:minecraft:821312388027908097>",
        "description": "Statistics for Minecraft AkA hypixel!"
    }
    bot.add_cog(cog)

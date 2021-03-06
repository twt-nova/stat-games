import discord
from discord.ext import commands
from utils.fetch_from import fetch_from
from PIL import Image, ImageDraw, ImageFont
import io
from utils import charts
import tempfile


def choose_font(text, max_length=12):
    return len(text) > max_length


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
            await ctx.send_help(self.clash_royale)

    @clash_royale.command(aliases=["p", "person"],
                          description="Get statistics for a certain player")
    async def player(self, ctx, tag: crtag):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/clash_royale/players/{tag}"
            data = await fetch_from(url, self.bot)
            url = f"{self.bot.config['base_url']}/clash_royale/players/{tag}/battles"
            logdata = await fetch_from(url, self.bot)
            embed = discord.Embed()
            embed.colour = self.bot.colour
            embed.title = f"Statistics for {data['name']} ({data['tag']})"
            embed.description = f"All of the stats you need to know about {data['name']}, provided by [statgames](https://statgames.net)"
            embed.set_image(url="attachment://fancy.png")
            im = self.generate_player(data, logdata)
            with io.BytesIO() as output:
                im.save(output, format="JPEG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    @clash_royale.command(aliases=["d"])
    async def deck(self, ctx, tag: crtag):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/clash_royale/players/{tag}"
            data = await fetch_from(url, self.bot)
            embed = discord.Embed()
            embed.colour = self.bot.colour
            embed.title = f"Statistics deck of {data['name']} ({data['tag']})"
            embed.description = f"All of the stats you need to know about deck of {data['name']}, provided by [statgames](https://statgames.net)"
            embed.set_image(url="attachment://fancy.png")
            im = await self.generate_deck(data)
            with io.BytesIO() as output:
                im.save(output, format="JPEG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    @clash_royale.command(aliases=["c", "clans"])
    async def clan(self, ctx, tag: crtag):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/clash_royale/clan/{tag}"
            data = await fetch_from(url, self.bot)
            url = f"{self.bot.config['base_url']}/clash_royale/clan/{tag}/current_war"
            wardata = await fetch_from(url, self.bot)
            url = f"{self.bot.config['base_url']}/clash_royale/clan/{tag}/war_log"
            logdata = await fetch_from(url, self.bot)
            embed = discord.Embed()
            embed.colour = self.bot.colour
            embed.title = f"Statistics deck of {data['name']} ({data['tag']})"
            embed.description = f"All of the stats you need to know about the clan {data['name']}, provided by [statgames](https://statgames.net)"
            embed.add_field(name="Clan Description", value=data["description"])
            embed.set_image(url="attachment://fancy.png")
            im = self.generate_clan(data, wardata, logdata)
            with io.BytesIO() as output:
                im.save(output, format="JPEG")
                output.seek(0)
                await ctx.send(file=discord.File(output, filename="fancy.png"), embed=embed)

    def generate_clan(self, data, wardata, pastwardata):
        bg = Image.open("./assets/clashroyale.jpg")
        bg_layer = Image.new("RGBA", bg.size, color=(24, 24, 24, 240))
        bg.paste(bg_layer, (0, 0), bg_layer)
        draw = ImageDraw.Draw(bg)
        fontcolour = (244, 244, 244, 255)
        o = 20
        big = ImageFont.truetype("./assets/font.ttf", int(1.5*o))
        medium = ImageFont.truetype("./assets/font.ttf", int(1.25*o))
        small = ImageFont.truetype("./assets/font.ttf", o)
        verysmall = ImageFont.truetype("./assets/font.ttf", int(0.75*o))

        draw.text((o, o), "Name", font=big, fill=fontcolour)
        draw.text((o, 3*o), str(data['name']), font=verysmall if choose_font(
            data["name"]) else small, fill=fontcolour)
        draw.text((9*o, o), "Tag", font=big, fill=fontcolour)
        draw.text((9*o, 3*o), str(data['tag']), font=small, fill=fontcolour)
        draw.text((18*o, o), "Score", font=big, fill=fontcolour)
        draw.text((18*o, 3*o), str(data['clanScore']),
                  font=small, fill=fontcolour)
        draw.text((24*o, o), "War Trophies", font=big, fill=fontcolour)
        draw.text(
            (24*o, 3*o), str(data['clanWarTrophies']), font=small, fill=fontcolour)

        draw.text((o, 5.5*o), "Donatoins", font=big, fill=fontcolour)
        draw.text(
            (o, 7.5*o), str(data['donationsPerWeek']), font=small, fill=fontcolour)
        draw.text((9*o, 5.5*o), "Requirement", font=big, fill=fontcolour)
        draw.text((9*o, 7.5*o), str(data['requiredTrophies']
                                    ) + " Trophies", font=small, fill=fontcolour)

        leader_list = [leader for leader in data["memberList"]
                       if leader["role"] == "leader"]  # should only be leader
        leader = leader_list[0]

        draw.text((20*o, 5.5*o), "Members", font=big, fill=fontcolour)
        draw.text((20*o, 7.5*o),
                  str(data['members'])+"/50", font=small, fill=fontcolour)
        draw.text((28*o, 5.5*o), "Leader", font=big, fill=fontcolour)
        draw.text((28*o, 7.5*o),
                  str(leader["name"]), font=small, fill=fontcolour)

        wartop = wardata["clan"]["participants"][-1]

        draw.text((16*o, 10*o), "Top Member", font=big, fill=fontcolour)
        draw.text((16*o, 12*o),
                  str(data['memberList'][0]["name"]), font=small, fill=fontcolour)
        draw.text((26*o, 10*o), "War Top", font=big, fill=fontcolour)
        draw.text((26*o, 12*o),
                  str(wartop["name"]), font=small, fill=fontcolour)

        coleaders = [coleader["name"]
                     for coleader in data["memberList"] if coleader["role"] == "coLeader"]
        elders = [elder["name"]
                  for elder in data["memberList"] if elder["role"] == "elder"]

        coleaders = coleaders[:5:]  # only show 5 otherwise ugly
        elders = elders[:3:]  # only show 5 otherwise ugly

        draw.text((16*o, 14.5*o), "Co-Leaders", font=big, fill=fontcolour)
        draw.text((16*o, 16.5*o),
                  ", \n".join(coleaders), font=verysmall, fill=fontcolour)
        draw.text((26*o, 14.5*o), "Elders", font=big, fill=fontcolour)
        draw.text((26*o, 16.5*o),
                  ", \n".join(elders), font=verysmall, fill=fontcolour)

        xdata = [data["memberList"][i]["name"]
                 for i in range(min(5, data['members']))]
        ydata = [data["memberList"][i]["trophies"]
                 for i in range(min(5, data['members']))]

        xdata = tuple(reversed(xdata))
        ydata = tuple(reversed(ydata))

        history = charts.create_sideways_bar(xdata, ydata, "Trophies")
        r = 0.5  # scaleing factor
        history = history.resize(
            (int(history.width*r), int(history.height*r)), Image.BOX)
        bg.paste(history, (int(0.5*o), int(7.5*o)),
                 history)  # not 6.9 not noice

        return bg

    async def generate_deck(self, data):
        deck = data["currentDeck"]
        bg = Image.open("./assets/clashroyale.jpg")
        bg_layer = Image.new("RGBA", bg.size, color=(24, 24, 24, 240))
        o = 20
        fontcolour = (244, 244, 2444, 255)
        bg.paste(bg_layer, (0, 0), bg_layer)
        draw = ImageDraw.Draw(bg)
        card_levels = [i["level"] + (13-i["maxLevel"]) for i in deck]
        top_level = max(card_levels)
        a = 0
        for b in card_levels:
            a += b
        avarage_level = a / 8
        big = ImageFont.truetype("./assets/font.ttf", int(1.5*o))
        small = ImageFont.truetype("./assets/font.ttf", o)
        draw.text((o, o), "Name", font=big, fill=fontcolour)
        draw.text((o, 3*o), str(data['name']), font=small, fill=fontcolour)
        draw.text((9*o, o), "Tag", font=big, fill=fontcolour)
        draw.text((9*o, 3*o), str(data['tag']), font=small, fill=fontcolour)
        draw.text((16*o, o), "Top Level", font=big, fill=fontcolour)
        draw.text((16*o, 3*o), str(top_level),
                  font=small, fill=fontcolour)
        draw.text((24*o, o), "Avarage Level", font=big, fill=fontcolour)
        draw.text(
            (24*o, 3*o), str(avarage_level), font=small, fill=fontcolour)

        r = 0.45

        for i, card in enumerate(deck):
            buffer = tempfile.SpooledTemporaryFile(max_size=1e9)
            async with self.bot.session.get(card["iconUrls"]["medium"]) as resp:
                if resp.status != 200:
                    raise Exception
                buffer.write(await resp.content.read())
                buffer.seek(0)
                im = Image.open(io.BytesIO(buffer.read()))
            im = im.resize((int(im.width*r), int(im.height*r)), Image.BOX)
            if i < 4:
                x = o + i*im.width + i*3*o
                y = int(4.5*o)
            else:
                y = 12*o
                i2 = i-4
                x = o + i2*im.width + i2*3*o
            bg.paste(im, (int(x), y), im)

        return bg

    def generate_player(self, data, logdata):
        bg = Image.open("./assets/clashroyale.jpg")
        bg_layer = Image.new("RGBA", bg.size, color=(24, 24, 24, 240))
        draw = ImageDraw.Draw(bg_layer)
        o = 20
        # This part was for making the border, which we decided to remove LLL
        # offset=15
        # draw.rectangle((offset,offset, bg.width - o, bg.height-o), fill=(24,24,24,240))
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
            (24*o, 3*o), str(data['bestTrophies']), font=small, fill=fontcolour)
        draw.text((o, 5.5*o), "Level", font=big, fill=fontcolour)
        draw.text((o, 7.5*o), str(data['expLevel']),
                  font=small, fill=fontcolour)
        draw.text((9*o, 5.5*o), "Wins", font=big, fill=fontcolour)
        draw.text((9*o, 7.5*o), str(data['wins']), font=small, fill=fontcolour)
        draw.text((16*o, 5.5*o), "Losses", font=big, fill=fontcolour)
        draw.text((16*o, 7.5*o),
                  str(data['losses']), font=small, fill=fontcolour)
        draw.text((24*o, 5.5*o), "Clan", font=big, fill=fontcolour)
        draw.text((24*o, 7.5*o), str(data['clan']['name'] if data.get(
            "clan") else "No Clan"), font=small, fill=fontcolour)

        wlchart = charts.create_pie_chart(
            ("Wins", "Losses"), (data["wins"], data["losses"]), (0, 0), colours=((1, 0, 0), (0, 0, 1)))
        r = 0.6  # scaleing factor
        wlchart = wlchart.resize(
            (int(wlchart.width*r), int(wlchart.height*r)), Image.NEAREST)
        bg.paste(wlchart, (int(-0.2*o), int(6.9*o)), wlchart)  # noice 6.9
        y = [d["team"][0]["startingTrophies"] for d in logdata if d["team"]]

        history = charts.create_line_graph(
            "Battle History", "Trophies", y)
        r = 0.5  # scaleing factor
        history = history.resize(
            (int(history.width*r), int(history.height*r)), Image.BOX)
        bg.paste(history, (int(20*o), int(7.5*o)),
                 history)  # not 6.9 not noice

        return bg


def setup(bot):
    Cog = ClashRoyale(bot)
    Cog.help_cmd = {
        "name": "Clash Royale",
        "emoji": "<:clash_royale:821312387935240243>",
        "description": "Check and See your stats for clash royale"
    }
    bot.add_cog(Cog)

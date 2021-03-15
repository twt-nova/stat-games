import discord
from discord.ext import commands
from utils.fetch_from import fetch_from


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
        embed.add_field(name="Level", value=data["expLevel"])
        embed.add_field(name="Tropies", value=data["trophies"])
        await ctx.send(embed=embed)


def setup(bot):
    Cog = ClashRoyale(bot)
    Cog.help_cmd = {
        "name": "Clash Royale",
        "emoji": "<:clashroyale:820959551821971466>",
        "description": "Check and See your stats for clash royale"
    }
    bot.add_cog(Cog)

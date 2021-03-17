import discord
from discord.ext import commands


class Hypixel(commands.Bot):
    def __init__(self, bot):
        self.bot = bot

    @commands.group(aliases=["h", "mc", "minecraft"])
    async def hypixel(self, ctx):
        if not ctx.invoked_subcommand:
            await ctx.send_group_help(self.hypixel)

    @hypixel.command(aliases=["p", "person"])
    async def player(self, ctx, name):
        async with ctx.typing():
            url = f"{self.bot.config['base_url']}/clash_royale/clan/{tag}"
            data = await fetch_from(url, self.bot)

def setup(bot):
    cog = Hypixel(bot)
    cog.help_command = {
        "name": "Hypixel",
        "emoji": "<:minecraft:821312388027908097>",
        "description": "Statistics for Minecraft AkA hypixel!"
    }
    bot.add_cog(cog)

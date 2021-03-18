from discord.ext import commands
import discord

# Errors that are ignored
ignore = [commands.CommandNotFound, commands.TooManyArguments]

# Error Messages
error_response = {
    commands.NoPrivateMessage: "This command doesn't work in private messges!",
    commands.MissingPermissions: "You are missing the **{e.missing_perms[0]}** permissions to do this!",
    commands.BotMissingPermissions: "It seams the bot doesnt have the required permissions",
    commands.CommandOnCooldown: "This command is on a cooldown: Retry after {e.retry.after}. You can only use this command {e.cooldown.rate} every {e.cooldown.per} Seconds!",
    commands.BadArgument: "Oops an invalid argument has been passed!",
    commands.BadUnionArgument: "An invalid argument has been passed for {e.parent.name}!",
    commands.MissingRequiredArgument: "You need the {e.param.name} argument for this command to work!",
    commands.CheckFailure: "You do **not** have permissions to do this!",
    commands.CommandInvokeError: "Something Happend While gettings stats for this player, double check the spelling. ```{e}```",
}


class ErrorHandler(commands.Cog):
    """Cog used to handle general command errors"""

    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_command_error(self, ctx, error):
        if error.__class__ in ignore:
            return
        for e in error_response:
            m = error_response[e]
            if isinstance(error, e):
                embed = discord.Embed()
                embed.colour = discord.Colour.red()
                embed.title = "Error!"
                embed.description = m.format(e=error)
                await ctx.send(embed=embed)
                return
        raise error   # if the error is not known


def setup(bot):
    bot.add_cog(ErrorHandler(bot))

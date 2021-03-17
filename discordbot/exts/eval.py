from discord.ext import commands
import asyncio
import traceback
import discord
import inspect
import textwrap
from contextlib import redirect_stdout
import io
import copy
import datetime
from collections import Counter
from datetime import datetime as dt
import aiohttp


class eval(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self._last_result = None
        self.sessions = set()

    def cleanup_code(self, content):
        """Automatically removes code blocks from the code. aka ```py ```"""

        if content.startswith('```') and content.endswith('```'):
            return '\n'.join(content.split('\n')[1:-1])

        # remove `foo`
        return content.strip('` \n')

    async def cog_check(self, ctx):
        return ctx.author.id in [445556389532925952, 188681820554919936]

    def get_syntax_error(self, e):
        if e.text is None:
            return f'```py\n{e.__class__.__name__}: {e}\n```'
        return f'```py\n{e.text}{"^":>{e.offset}}\n{e.__class__.__name__}: {e}```'

    @commands.command()
    async def eval(self, ctx, *, body: str):
        embed = discord.Embed(timestamp=dt.utcnow(),
                              color=discord.Color(0x00BDFF))
        embed.title = " :arrows_counterclockwise: Processing..."
        msg = await ctx.send(embed=embed)
        env = {
            'bot': self.bot,
            'ctx': ctx,
            'channel': ctx.channel,
            'author': ctx.author,
            'guild': ctx.guild,
            'message': ctx.message,
            'dt': dt,
            'aiohttp': aiohttp,
            'nite': ctx.guild.get_member(445556389532925952)
        }

        env.update(globals())

        body = self.cleanup_code(body)
        stdout = io.StringIO()

        to_compile = f'async def func():\n{textwrap.indent(body, "  ")}'

        try:
            exec(to_compile, env)
        except Exception as e:
            embed.title = ":negative_squared_cross_mark: Failed to evaluate code."
            embed.description = f"```py\n{e.__class__.__name__}: \n{e}```"
            return await msg.edit(embed=embed)

        func = env['func']
        try:
            with redirect_stdout(stdout):
                ret = await func()
        except Exception as e:
            value = stdout.getvalue()
            embed.title = ":negative_squared_cross_mark: Failed to evaluate code."
            embed.description = f"```py\n{value}{traceback.format_exc()}\n```"
            await msg.edit(embed=embed)
        else:
            value = stdout.getvalue()

            if ret is None:
                if value:
                    embed.title = ":white_check_mark: Finished evaluation code!"
                    embed.description = f"```py\n{value}\n```"
                    await msg.edit(embed=embed)
                else:
                    embed.title = ":white_check_mark: Finished evaluation code!"
                    embed.description = f"Nothing was returned!"
                    await msg.edit(embed=embed)
            else:
                embed.title = ":white_check_mark: Finished evaluation code!"
                embed.description = f"```py\n{value}\n```"
                await msg.edit(embed=embed)


def setup(bot):
    cog = eval(bot)
    cog.help_cmd = {
        "name": "Eval command.",
        "description": "Only the bot owner(s) can use this command!",
        "emoji": "\U0001f1ea"
    }
    bot.add_cog(cog)

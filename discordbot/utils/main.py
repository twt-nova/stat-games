from discord.ext import commands
import discord
from pathlib import Path
import aiohttp


class Help(commands.HelpCommand):
    def get_command_signature(self, command):
        return f"`{self.clean_prefix}{command.qualified_name} {command.signature}`"


    async def send_command_help(self, command):
        embed = discord.Embed()
        embed.colour = self.context.bot.colour
        embed.title = f"Help for {command.name}"
        embed.description = command.description
        if len(command.aliases):
            embed.add_field(name="Aliases", value=", ".join(command.aliases))
        embed.add_field(
            name="Usage", value=self.get_command_signature(command))

        await self.context.send(embed=embed)


    async def send_group_help(self, group):
        embed = discord.Embed()
        embed.colour = self.context.bot.colour
        embed.title = f"Help for {group.name}"
        embed.description = group.description

        for command in group.commands:
            embed.add_field(name=f"{group.name} {command.name}",
                            value=self.get_command_signature(command))

        await self.context.send(embed=embed)


    async def send_bot_help(self, mapping):
        embed = discord.Embed()
        embed.colour = self.context.bot.colour
        embed.title = "Help for StatGames"
        embed.description = """
Welcome To [StatGames](https://statgames.net), 
A website and a discord bot that can show you the stats for your favorite games!
Choose the categories below that you need help for!
        """

        msg = await self.context.send(embed=embed)

        items = mapping.items()

        rm = []


        for cog, commands in items:
            try:
                if not cog.help_cmd:
                    raise Exception
            except:
                rm.append(cog)


        n = []

        for key, value in items:
            if not key or key in rm: 
                continue
            n.append((key, value))

        items = n.copy()

        l1, l2 = [], []

        for cog, commands in items:
            l1.append((cog, commands))
            l2.append(cog.help_cmd["emoji"])
        embed.add_field(name="🏠 Home", value="Go back to this screen.")

        await msg.add_reaction("🏠")
        for cog, commands in items:
            await msg.add_reaction(cog.help_cmd["emoji"])
            embed.add_field(
                name=cog.help_cmd["emoji"] + " " + cog.help_cmd["name"], value=cog.help_cmd["description"])
        await msg.edit(embed=embed)
        while True:
            try:
                r, u = await self.context.bot.wait_for("reaction_add",
                                                       check=lambda r, u: r.message.id == msg.id and u.id == self.context.author.id and (

                                                           str(r.emoji) in l2 or str(r.emoji) == "🏠"),
                                                       timeout=300)

            except TimeoutError:
                break


            try:
                await msg.remove_reaction(str(r.emoji), self.context.author)
            except discord.Forbidden:
                pass
            if str(r.emoji) == "🏠":
                await msg.edit(embed=embed)
                continue

            cog, cmds = l1[l2.index(str(r.emoji))]

            command_sigs = "\n".join(
                [self.get_command_signature(command) for command in cmds])
            new_embed = discord.Embed()

            new_embed.colour = self.context.bot.colour
            new_embed.title = f"{cog.help_cmd['emoji']} {cog.help_cmd['name']}"
            new_embed.description = cog.help_cmd["description"]
            if command_sigs:
                new_embed.add_field(name="Commands", value=command_sigs)


            await msg.edit(embed=new_embed)


class Bot(commands.Bot):
    def __init__(self, config, **options):
        self.config = config
        self.prefix = options.get("prefix") or config["prefix"]

        help_command = options.get("help_command") or Help()
        self.session = options.get("session") or aiohttp.ClientSession()
        self.colour = discord.Colour(
            options.get("colour") or self.config["colour"])
        super().__init__(self.prefix, help_command=help_command, **options)

    def format_ext(self, path):
        replacements = ((".py", ""), ("\\", "."), ("/", "."))
        for o, n in replacements:
            path = str(path).replace(o, n)
        return path

    def load_all_exts(self, base_path="exts"):
        for path in Path(base_path).glob("**/*.py"):
            formatted = self.format_ext(path)
            name = formatted.split(".")[-1]  # filename without patzh
            try:
                self.load_extension(formatted)
                print(f"Loaded Cog {name}!")
            except Exception as e:
                print(f"{e.__class__.__name__}: {e}")



    async def on_ready(self):
        await self.change_presence(activity=discord.Game("video games."))
        print(f"Started as {self.user}")

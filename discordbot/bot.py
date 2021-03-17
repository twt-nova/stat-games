from discord.ext import commands
import discord
import yaml
from pathlib import Path
from utils.main import Bot

def run(config_file="./config.yaml"):
    with open(config_file, "r") as f:
        config = yaml.safe_load(f.read())
    bot = Bot(config)
    bot.load_all_exts()

    bot.run(bot.config["token"])


__name__ == "__main__" and run()

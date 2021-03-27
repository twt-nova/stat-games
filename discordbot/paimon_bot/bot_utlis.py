import discord
import assets.pyson as pyson
import assets.scrapper as scrapper

def get_token():
  f = open("./token.txt", "r")
  token = f.read().strip()
  f.close()
  return token

async def add_reaction(msg, list_reactions):
  for reaction in list_reactions:
    await msg.add_reaction(reaction)

def generate_json():
  scrapper.generate_characters_json()

def get_characters():
  return pyson.read_json("./assets/characters.json")["characters"]

def  get_character(name):
  characters = get_characters()
  if name in characters.keys():
    return characters[name]
  else:
    return -1

def format_character(character):
  bold = lambda str: f"**{str}**"
  name = character["name"]
  hp = character["hp"]
  attack = character["attack"]
  defense = character["defense"]
  ascension_stat = character["ascension_stat"]
  ascension_stat_value = character["ascension_stat_value"]
  release_date = character["release_date"]
  return f"Character: {bold(name)}\nHp: {bold(hp)}\nAttack: {bold(attack)}\nDefense: {bold(defense)}\nAscension stat: {bold(ascension_stat)}\nAscension stat value: {bold(ascension_stat_value)}\nRelese date: {bold(release_date)}"

import requests
from bs4 import BeautifulSoup as bs
from paimon.genshin_character import Character
from paimon.pyson import write_json
import os

def to_number(stat):
  stat = stat.replace(",","")
  return int(stat)

def fetch():
  page = requests.get("https://genshin-impact.fandom.com/wiki/Characters/Comparison")
  soup = bs(page.content, 'html.parser')

  table = soup.findAll("table")[0]
  cells = table.findAll("tr")[1:]
  characters = []

  for cell in cells:
    tds = cell.findAll("td")
    name = tds[1].find("a")['title']
    hp = to_number(tds[2].text.strip())
    attack = to_number(tds[3].text.strip())
    defense = to_number(tds[4].text.strip())
    ascension_stat = tds[5].text.strip()
    ascension_stat_value = tds[6].text.strip()
    release_date = tds[7].text.strip()

    characters.append(
      Character(name, hp, attack, defense, ascension_stat, ascension_stat_value, release_date))
  
  char_dict = dict()
  for ch in characters:
    char_dict[ch.name.lower()] = ch.get_object()

  return char_dict

def generate_characters_json():
  char_dict = fetch()
  write_json(f"./assets/characters.json", {"characters": char_dict})

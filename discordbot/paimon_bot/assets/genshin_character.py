import json
class Character:

  def __init__(self, name, hp, attack,defense, ascension_stat, ascension_stat_value, release_date):
    self.name = name
    self.hp = hp
    self.attack = attack
    self.defense = defense
    self.ascension_stat = ascension_stat
    self.ascension_stat_value = ascension_stat_value
    self.release_date = release_date

  def __str__(self):
    return f"{self.name} HP:{self.hp} ATK:{self.attack} DEF:{self.defense} ASC_STAT:{self.ascension_stat} ASC_STAT_VALUE:{self.ascension_stat_value} RELEASE:{self.release_date}"

  def get_object(self):
    return {
      "name": self.name,
      "hp": self.hp,
      "attack": self.attack,
      "defense": self.defense,
      "ascension_stat": self.ascension_stat,
      "ascension_stat_value": self.ascension_stat_value,
      "release_date": self.release_date
    }
  
  def to_json(self):
    json.dumps(self.get_object())
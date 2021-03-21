const { fetchFrom } = require("../routes/utils/routesUtils");
const genhinImpactApi = "https://genshinlist.com/api";

async function getCharacters() {
  const result = await fetchFrom(`${genhinImpactApi}/characters`);
  try {
    const data = result.data.map((character) => {
      let img = `https://genshinlist.com/assets/img/characters/${character.slug}.png`;
      const newCharacter = { ...character, image: img };
      return newCharacter;
    });
    result.data = data;
  } catch (err) {
    result.data = {
      title: "Error at getting the characters",
      error: err,
    };
    result.status = 404;
  }

  return result;
}

async function getCharacterById(id) {
  const result = await getCharacters();
  id = parseInt(id);
  try {
    result.data.forEach((character) => {
      if (id === character.id) {
        result.data = character;
      }
    });
  } catch (err) {
    result.data = {
      title: "The character was not found",
      description: "There's no such character with the given id",
      error: err,
    };
    result.status = 404;
  }
  return result;
}

async function getCharacterByVisionType(type) {
  const result = await getCharacters();
  try {
    const data = result.data.filter((character) => {
      if (character.vision == type) return character;
    });
    result.data = data;
  } catch (err) {
    result.data = {
      title: "The vision type does not exist",
      error: err,
    };
    result.status = 404;
  }
  return result;
}

async function getCharactersByRarity() {
  const result = await getCharacters();
  try {
    const data = result.data.sort((characterA, characterB) => {
      return characterA.rarity - characterB.rarity;
    });
    result.data = data;
  } catch (err) {
    result.data = {
      title: "Error at getting the characters",
      error: err,
    };
    result.status = 404;
  }
  return result;
}

async function getWeapons() {
  return await fetchFrom(`${genhinImpactApi}/weapons`);
}

async function getWeaponsByType(type) {
  const result = await getWeapons();
  let data;
  try {
    data = result.data.filter((weapon) => {
      if (type == weapon.type) return weapon;
    });
  } catch (err) {
    data = {
      title: `${type} wasn't found`,
      error: err,
    };
    result.status = 404;
  }
  result.data = data;
  return result;
}

async function getWeaponByCharacterId(id) {
  const character = await getCharacterById(id);
  return await getWeaponsByType(character.data.weapon.toString());
}

async function getWeaponsByAttack() {
  const result = await getWeapons();
  try {
    const data = result.data.sort((weaponA, weaponB) => {
      return weaponA.attack - weaponB.attack;
    });
    result.data = data;
  } catch (err) {
    result.data = {
      title: "Error at getting the weapons",
      error: err,
    };
    result.status = 404;
  }
  return result;
}

async function getArtifacts() {
  const result = await fetchFrom(`${genhinImpactApi}/artifacts`);
  return result;
}
async function getArtifactbyId(id) {
  const result = await getArtifacts();
  id = parseInt(id);
  try {
    result.data.forEach((artifact) => {
      if (id === artifact.id) {
        result.data = artifact;
      }
    });
  } catch (err) {
    result.data = {
      title: "The artifact was not found",
      description: "There's no such artifact with the given id",
      error: err,
    };
    result.status = 404;
  }
  return result;
}

module.exports = {
  getCharacters,
  getCharacterById,
  getCharactersByRarity,
  getCharacterByVisionType,
  getWeapons,
  getWeaponByCharacterId,
  getWeaponsByAttack,
  getWeaponsByType,
  getArtifacts,
  getArtifactbyId,
};

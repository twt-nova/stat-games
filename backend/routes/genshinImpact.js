const express = require("express");
const router = express.Router();
const genshinImpact = require("../functions/genshinImpact");
//  root:/api/v1/genshin_impact

//characters
router.get("/characters", async (req, res) => {
  const result = await genshinImpact.getCharacters();
  res.status(result.status).json(result.data);
});

router.get("/characters/:id", async (req, res) => {
  const id = req.params.id;
  const result = await genshinImpact.getCharacterById(id);
  res.status(result.status).json(result.data);
});

router.get("/characters/rarity", async (req, res) => {
  const result = await genshinImpact.getCharactersByRarity();
  res.status(result.status).json(result.data);
});

router.get("/characters/vision/:type", async (req, res) => {
  const type = req.params.type;
  const result = await genshinImpact.getCharacterByVisionType(type);
  res.status(result.status).json(result.data);
});

router.get("/characters/:id/weapons", async (req, res) => {
  const id = req.params.id;
  const result = await genshinImpact.getWeaponByCharacterId(id);
  res.status(result.status).json(result.data);
});

//weapons
router.get("/weapons", async (req, res) => {
  const result = await genshinImpact.getWeapons();
  res.status(result.status).json(result.data);
});

router.get("/weapons/attack", async (req, res) => {
  const result = await genshinImpact.getWeaponsByAttack();
  res.status(result.status).json(result.data);
});

router.get("/weapons/:type", async (req, res) => {
  const type = req.params.type;
  const result = await genshinImpact.getWeaponsByType(type);
  res.status(result.status).json(result.data);
});

//artifacts
router.get("/artifacts", async (req, res) => {
  const result = await genshinImpact.getArtifacts();
  res.status(result.status).json(result.data);
});

router.get("/artifacts/:id", async (req, res) => {
  const id = req.params.id;
  const result = await genshinImpact.getArtifactbyId(id);
  res.status(result.status).json(result.data);
});

module.exports = router;

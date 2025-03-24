const fs = require("fs");
const path = require("path");

const MASTER_DATA_PATH = path.join(__dirname, "../duaa.json");
const TARGET_PATH = path.join(
  __dirname,
  "../generated/7_dua-for-goodness-health-and-blessings.json"
);

/**
 * Load JSON file
 * @param {string} filePath - Path to JSON file
 * @returns {Array} - Parsed JSON data
 */
const loadJson = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

/**
 * Save JSON file
 * @param {Object} data - Data to be saved
 * @param {string} filePath - Path to save JSON file
 */
const saveJson = (data, filePath) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

const generateDuaForGoodnessHealthAndBlessings = () => {
  const masterData = loadJson(MASTER_DATA_PATH);

  const targetCategories = new Set([
    "Perlindungan dari Keburukan dan Kezaliman Diri/Perbuatan Melampaui Batas",
    "Perlindungan dari Azab Neraka",
    "Keselamatan dari dosa Syirik",
    "Perlindungan dari Setan",
    "Perlindungan dari Hal-Hal Buruk",
    "Perlindungan dari Murka Allah",
    "Perlindungan dari Bencana",
    "Perlindungan dari Takdir Buruk",
    "Perlindungan dari Azab Kubur",
    "Perlindungan dari Dajjal",
    "Perlindungan dari Rasa Malas",
    "Perlindungan dari Lilitan Hutang",
    "Perlindungan dari Keburukan di Hari Tua",
  ]);

  const filteredData = masterData.filter((item) =>
    item?.categories?.categories_id?.some((category) =>
      targetCategories.has(category)
    )
  );

  const uniqueData = Array.from(
    new Map(filteredData.map((dua) => [dua.id, dua])).values()
  );

  uniqueData.sort((a, b) => a.id - b.id);

  saveJson(uniqueData, TARGET_PATH);
};

generateDuaForGoodnessHealthAndBlessings();

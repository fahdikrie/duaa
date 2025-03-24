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
    "Kemudahan Rezeki",
    "Kebaikan dan Keberkahan dalam Urusan Dunia",
    "Kesehatan Jasad (Badan, Penglihatan, dan Pendengaran) dan Perlindungan dari Penyakit",
  ]);

  const filteredData = masterData.filter((item) =>
    item.categories?.categories_id.some((category) =>
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

const fs = require("fs");
const path = require("path");

const MASTER_DATA_PATH = path.join(__dirname, "../duaa.json");
const TARGET_PATH = path.join(
  __dirname,
  "../generated/6_dua-of-the-prophets.json"
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

const generateDuaOfTheProphets = () => {
  const masterData = loadJson(MASTER_DATA_PATH);

  const filteredData = masterData.filter(
    (item) =>
      Array.isArray(item?.categories?.categories_id) &&
      item.categories.categories_id.some((cat) => cat.startsWith("Doa Nabi"))
  );

  saveJson(filteredData, TARGET_PATH);
};

generateDuaOfTheProphets();

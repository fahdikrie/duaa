const fs = require("fs");
const path = require("path");

const MASTER_DATA_PATH = path.join(__dirname, "../duaa.json");
const AGGREGATED_DATA_PATH = path.join(
  __dirname,
  "../generated/1_mapped-data.json"
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

const generateMappedData = () => {
  console.log("🔄 Loading master data...");
  const masterData = loadJson(MASTER_DATA_PATH);

  console.log("⚡ Generating aggregated data...");
  const aggregatedData = Object.fromEntries(
    masterData.map((item) => [item.id, item])
  );

  console.log("💾 Saving aggregated data...");
  saveJson(aggregatedData, AGGREGATED_DATA_PATH);

  console.log("✅ Aggregated data updated!");
};

generateMappedData();

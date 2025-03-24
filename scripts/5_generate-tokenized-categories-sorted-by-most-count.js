const fs = require("fs");
const path = require("path");

const MASTER_DATA_PATH = path.join(__dirname, "../duaa.json");
const TARGET_PATH = path.join(
  __dirname,
  "../generated/5_tokenized-categories-sorted-by-most-count.json"
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

const generateCategoryCount = () => {
  const masterData = loadJson(MASTER_DATA_PATH);
  const categoryMap = new Map();

  masterData.forEach((item) => {
    if (item.categories?.categories_id) {
      item.categories.categories_id.forEach((category, index) => {
        const categoryEn = item.categories.categories_en?.[index] || "";
        const key = `${category}|||${categoryEn}`;

        categoryMap.set(key, (categoryMap.get(key) || 0) + 1);
      });
    }
  });

  const categoryCounts = Array.from(categoryMap.entries())
    .map(([key, count], index) => {
      const [category_id, category_en] = key.split("|||");
      return { id: index + 1, category_id, category_en, count };
    })
    .sort((a, b) => b.count - a.count);

  saveJson(categoryCounts, TARGET_PATH);
};

generateCategoryCount();

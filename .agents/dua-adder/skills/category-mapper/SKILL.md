---
name: category-mapper
description: Maps Arabic doa text to existing Indonesian and English categories, reusing current category patterns before creating new ones. Use when classifying doa entries.
---

# Category Mapper

Generate `categories_id` and `categories_en`.

## Rules

- Prefer categories already present in the dataset (./duaa.json).
- Only create a new category if no existing category fits well.
- Keep Indonesian and English categories parallel in meaning.
- Use a small set of highly relevant categories.
- Avoid overly specific or redundant categories.

## Output

Return:

- `categories_id[]`
- `categories_en[]`

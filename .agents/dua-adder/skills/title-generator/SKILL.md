---
name: title-generator
description: Generates doa titles in Indonesian and English that follow existing dataset patterns. Use when given Arabic doa text and a need for consistent title naming.
---

# Title Generator

Generate `title_id` and `title_en` using the style already present in the dataset.

## Rules
- Match existing tone and phrasing.
- Prefer concise, descriptive titles.
- Reflect the doa meaning, source, and main theme.
- Do not add explanation inside the title.
- If the doa is from a prophet or explicit source, mention it only if the dataset pattern does so.

## Output
Return:
- `title_id`
- `title_en`

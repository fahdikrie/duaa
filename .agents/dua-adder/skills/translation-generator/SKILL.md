---
name: translation-generator
description: Generates Indonesian and English translations for Arabic doa text in a consistent prayer style. Use when translating doa matan into dataset-ready fields.
---

# Translation Generator

Generate `translation_id` and `translation_en`.

## Rules
- Translate meaning naturally, not word-for-word.
- Keep it prayer-like and readable.
- Preserve theological nuance.
- Keep both languages aligned in meaning.
- Avoid adding commentary inside translation fields.

## Output
Return:
- `translation_id`
- `translation_en`

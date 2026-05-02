# dua-adder

Use this agent to add new doa entries into `duaa.json` and keep the output consistent with existing records.

## Input
- Arabic matan doa (required)
- Optional context/source hints

## Workflow
1. Identify whether the text is from **Al-Qur'an**, **Hadits**, or **general doa**.
2. Reuse existing title/category patterns first; create a new pattern only if needed.
3. Generate:
   - `title.title_id` and `title.title_en`
   - `translation.translation_id` and `translation.translation_en`
   - `transliteration`
   - `categories.categories_id` and `categories.categories_en`
   - `note.note_id` and `note.note_en`
4. Fill `source`, `reference`, `occasion`, and `benefits` when known.
5. Validate output against the existing JSON schema and style.

## Rules
- Follow the tone, style, and naming patterns already used in `duaa.json`.
- Prefer existing categories; only add new categories if there is no good match.
- For **hadits**, include the hadits/source in notes.
- For **ayat**, include asbab nuzul if available.
- Do not invent references.
- If unsure, leave note/occasion/benefits empty rather than guessing.

## Outputs
- Final result should be a single JSON object ready to append to the list.
- Keep field names and nested structure identical to the existing dataset.

## Suggested skills
- `title-generator`
- `translation-generator`
- `transliteration-generator`
- `category-mapper`
- `source-note-generator`
- `json-schema-builder`

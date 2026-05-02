---
name: json-schema-builder
description: Builds the final JSON object for a doa entry using the existing dataset schema. Use when assembling all generated fields into one record.
---

# JSON Schema Builder

Assemble the final doa entry object.

## Rules
- Preserve the existing field order and nesting.
- Keep null fields as null when appropriate.
- Fill only fields you can support confidently.
- Ensure `source` and `reference` are consistent.
- Return valid JSON ready to append to the list.

## Expected structure
- `id`
- `title`
- `arabic`
- `arabic_first_person_plural`
- `translation`
- `transliteration`
- `transliteration_first_person_plural`
- `categories`
- `source`
- `reference`
- `occasion`
- `benefits`
- `note`

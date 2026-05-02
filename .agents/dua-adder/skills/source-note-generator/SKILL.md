---
name: source-note-generator
description: Generates source notes for doa entries, including hadith references or Qur'anic asbab nuzul when available. Use when preparing the note fields for a doa dataset.
---

# Source Note Generator

Generate `note_id` and `note_en`.

## Rules
- If the doa is from a **hadits**, mention the hadits source in the note.
- If the doa is from an **ayat**, mention the **asbab nuzul** if available.
- If no reliable note is known, leave the note empty.
- Do not fabricate chains, numbers, or contexts.
- Keep the note short and factual.

## Output
Return:
- `note_id`
- `note_en`

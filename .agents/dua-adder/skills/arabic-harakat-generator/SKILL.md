---
name: arabic-harakat-generator
description: Adds correct Arabic diacritics (harakat) to doa text when the input Arabic is unvowelled or partially vowelled. Use when the user provides Arabic matan without full harakat and the dataset needs a properly vocalized version.
---

# Arabic Harakat Generator

Generate a fully vowelled Arabic version of the provided doa text.

## Rules
- Infer harakat from standard Qur'anic/Hadith wording when possible.
- Preserve the original wording and order unless a clear correction is needed.
- Do not change meaning, only add diacritics and fix obvious orthographic issues.
- If a phrase has multiple plausible vocalizations, choose the most standard one used in trusted Islamic sources.
- Keep punctuation and spacing clean.

## Output
Return the Arabic text with proper harakat.

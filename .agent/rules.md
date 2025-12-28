# AI Rules

## HTML Formatting
- **Single-line Paragraphs**: When updating HTML files, always keep the text content of `<p>` tags on a single line.
- **No Indentation Wrapping**: Do not wrap paragraph text onto multiple lines with internal indentation.

## Technical Constraints & Standards
- **Strict Vanilla Stack**: Use only vanilla HTML, CSS, and JS. Do not introduce external libraries (React, Tailwind, jQuery, etc.) or build tools.
- **External Asset Icons**: Prefer external SVG files in the `assets/` directory rather than inlining them in HTML.
- **Theme Consistency**: All new UI components must respect the light/dark mode system using CSS variables defined in `style.css`.
- **Global Layout Consistency**: Maintain identical mastheads and footers across all pages (`index.html`, `about.html`, `contact.html`).

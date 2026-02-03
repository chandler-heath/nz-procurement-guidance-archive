# New Zealand Procurement Guidance Archive

A static repository designed to preserve historical New Zealand government procurement guidance documents. This archive provides researchers, professionals, and the public with access to superseded documents while maintaining links to their current, authoritative sources.

Official government portals often remove previous versions of procurement rules and guidance once they are updated. This project aims to bridge that gap by providing a central location for historical procurement frameworks, ensuring continuity and context for those researching the evolution of New Zealand's procurement landscape.

[View the live site](https://chandler-heath.github.io/nz-procurement-guidance-archive/)

## Features

-   **Document Categorization**: Organized into sections: `Government Procurement Rules`, `Procurement Good Practice`, `Conflict of Interest Management Good Practice`
-   **Version Tracking**: Clearly distinguishes between "Current" authoritative versions and "Archive" historical documents.
-   **Dark Mode**: Supports light and dark themes with system preference detection and persistent storage via cookies.

## Project Structure

-   `index.html`: The main archive page containing document links and categories.
-   `about.html`: Information regarding the archive's purpose and scope.
-   `contact.html`: Contact link and feedback details.
-   `style.css`: Central stylesheet containing design tokens, theme variables, and layout definitions.
-   `theme.js`: JavaScript utility for theme switching, cookie management, and year auto-update.
-   `assets/`: Directory containing optimized SVG assets, logos, and favicons.
-   `PDFs/`: Directory containing locally-hosted PDF documents.

## Deployment

The site is built as a pure static web page (HTML/CSS/JS) with no build steps required. It is designed to be highly portable and can be hosted on any static hosting provider.

### GitHub Pages

Deploys to [GitHub Pages](https://chandler-heath.github.io/nz-procurement-guidance-archive/) using GitHub Actions. The workflow is defined in the `.github/workflows/static.yml` file.

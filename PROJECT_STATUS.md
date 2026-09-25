# Project status

Updated on 23 September 2026.

## Current state

- The academic website is stored in the GitHub organization `christian-jobelius-schulz`.
- The repository is named `christian-jobelius-schulz.github.io`.
- GitHub Pages is published from `main`, root directory.
- The live URL is `https://christian-jobelius-schulz.github.io/`.
- The complete profile and papers are generated into HTML using `node scripts/build_site.cjs`. JavaScript adds abstract toggles; content remains readable without it.
- The local preview is available at `http://127.0.0.1:8000/` while the local preview server is running.
- On desktop, the left profile panel remains visible while the right content scrolls.
- On smartphones, the single column shows the photo, name and role first, then Welcome and research, followed by university affiliation, contact details and profile links. Desktop retains the sticky sidebar.

## Content and design decisions

- Keep the website deliberately basic and academic.
- Use one dark grey for ordinary text and a restrained deep blue for links.
- Paper titles are dark grey, not blue.
- `Online Conditional Vine Copulas: Forecasting Electricity Demand` is the first working paper.
- The biography uses “a member of the TRR 391” and “RuhrMetrics Reading Group.”
- The portrait uses `assets/portrait-mild.png`, with a much milder color correction retaining the original sunset warmth, at 230 px wide on desktop and 210 px on smartphones. The original `me.jpg` is preserved.
- `Testing Growth-at-Risk` is first under Work in Progress.

## Metadata already prepared

- Page title and description
- Canonical URL
- Robots indexing directive
- Open Graph and Twitter metadata
- Schema.org `Person` structured data
- Schema.org `WebSite` name metadata and portrait-based social preview metadata. No custom favicon (user preference).
- Google Search Console verification tag; user confirmed verification and requested homepage indexing
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`

## Recommended next steps

- Original CV source and assistant-led update instructions are recorded locally in `sources.local.json`, `AGENTS.md`, and `notes/README.md`. On 23 September 2026 the original LaTeX and PDF were reconciled, rebuilt, visually checked, and synchronized with both website PDF copies. Paper-project paths have not yet been supplied. This is an on-request workflow, not a background synchronization service.

1. Review the mildly adjusted portrait at the larger size in context.
2. Recheck search appearance and social previews after external caches refresh.
3. Decide which source files should remain in the public repository.
4. Keep generated HTML in sync by running `node scripts/build_site.cjs` after content updates.
5. Refine the automatic content-sync and deployment workflow.
6. Perform a final desktop and smartphone review.
7. Include generated HTML in each content update pushed to GitHub Pages.
8. Monitor Google Search Console for homepage indexing and sitemap processing; verification and the indexing request are complete.

## Restore point

The Git tag `draft-2026-09-17` identifies this saved state.

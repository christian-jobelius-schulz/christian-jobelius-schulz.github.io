# Academic website

A lightweight academic site inspired by the clarity of Matthias Meier's site, with its own visual identity and an automatic document-to-website workflow.

## Add your content

For assistant-led updates, supply the original CV and research-project paths and ask to update the website. Local `AGENTS.md` instructions describe the update procedure; `sources.local.json` remembers source paths on this computer. The assistant reads and reconciles the originals, updates the curated content, and refreshes the downloadable CV. This runs on request, not as background monitoring. Ask explicitly to publish when you also want the live site updated.

The script below is a basic importer for website-local staging files. Its PDF extraction is heuristic; review its output before publishing. It does not connect directly to original folders or automatically reconcile factual changes.

1. Put your CV PDF in `sources/cv/`.
2. Put research-paper PDFs in `sources/papers/`.
3. Run `python -m pip install pypdf`, then `python scripts/sync_content.py`.
4. Run `node scripts/build_site.cjs` after any content changes to render the biography and papers into `index.html`.
5. Preview with `python -m http.server 8000` and open `http://localhost:8000`.

The importer extracts basic profile information and each paper's abstract. Optional same-named JSON sidecars give you exact control over titles, coauthors, categories, journal details, links, and profile wording; examples are in each source folder.

## Automatic updates

On GitHub, any push that changes `sources/` runs the included workflow, rebuilds `content/site.json`, and commits the generated content. Enable GitHub Pages for the repository's main branch to publish it.

The published site is plain HTML, CSS, and JavaScript. Its dependency-free HTML generator requires Node.js 18 or newer; visitors do not need JavaScript to read the content. The generator preserves the metadata in the HTML head. Run the generator locally and commit `index.html` together with content changes before pushing for publication.

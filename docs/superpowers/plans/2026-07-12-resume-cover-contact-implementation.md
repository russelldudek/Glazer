# Resume and Cover Letter Contact Information Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Russell Dudek's complete contact information and candidate-site link to both application-document headers, mention the site in the cover-letter body, and preserve exact PDF page counts.

**Architecture:** Modify the existing semantic HTML metadata blocks rather than introducing a new document component. Add one small shared `.contact-line` style to `documents.css`, keep all anchors as external absolute URLs, and regenerate only the affected PDFs from the approved HTML source.

**Tech Stack:** Static HTML, CSS, Python regression tests, headless Chromium, Poppler PDF inspection.

## Global Constraints

- Resume PDF must remain exactly 2 US Letter pages.
- Cover-letter PDF must remain exactly 1 US Letter page.
- Use `tel:+14122878640`, `mailto:russelldudek@gmail.com`, `https://www.linkedin.com/in/russelldudek`, and `https://russelldudek.github.io/Glazer/`.
- Preserve the visible text `412.287.8640`, `russelldudek@gmail.com`, `linkedin.com/in/russelldudek`, and `russelldudek.github.io/Glazer/`.
- Preserve reciprocal document navigation and independent-candidate branding.
- Do not add dependencies or change unrelated campaign content.

---

### Task 1: Contact-link regression test

**Files:**
- Create: `tests/test_document_contact_info.py`
- Test: `tests/test_document_contact_info.py`

**Interfaces:**
- Consumes: `resume.html`, `cover-letter.html`
- Produces: deterministic pass/fail assertions for all required links and the cover-letter body sentence.

- [ ] Write the failing test.
- [ ] Run it and verify it fails because the current documents do not contain the approved phone link.

### Task 2: Implement contact headers and body link

**Files:**
- Modify: `resume.html`
- Modify: `cover-letter.html`
- Modify: `documents.css`

**Interfaces:**
- Consumes: the existing `.doc-meta`, `.doc-name`, and `.letter-body` structure.
- Produces: linked contact rows that remain readable in screen and print layouts.

- [ ] Replace the resume page-one metadata with the complete contact line.
- [ ] Add the compact resume page-two contact line.
- [ ] Replace the cover-letter metadata with the complete contact line.
- [ ] Append the approved candidate-site sentence to the Model Reliability Contract paragraph.
- [ ] Add shared `.contact-line` and print-safe link styles.
- [ ] Run the regression test and verify it passes.

### Task 3: Render and verify documents

**Files:**
- Update: `docs/Russell-Dudek-SGWS-AIML-Resume.pdf`
- Update: `docs/Russell-Dudek-SGWS-AIML-Cover-Letter.pdf`

**Interfaces:**
- Consumes: updated HTML and CSS.
- Produces: exact-page-count PDFs and viewport screenshots for review outside the repository.

- [ ] Render both PDFs with headless Chromium.
- [ ] Verify the resume is exactly 2 pages and the cover letter exactly 1 page.
- [ ] Render PDF pages to PNG and inspect for overlap, clipping, broken glyphs, and page-balance regression.
- [ ] Check both HTML routes at 1280 px and 390 px widths.
- [ ] Confirm contact links wrap cleanly, reciprocal navigation remains visible, and no horizontal overflow or console errors occur.
- [ ] Smoke-test the campaign index after the shared CSS update.

### Task 4: Publish and re-fetch

**Files:**
- Modify: `resume.html`
- Modify: `cover-letter.html`
- Modify: `documents.css`
- Modify: two PDF files
- Create: design, plan, and regression-test files

**Interfaces:**
- Produces: one coherent `main` commit with source, PDFs, design rationale, plan, and regression coverage.

- [ ] Commit the updated source and generated PDFs to `main`.
- [ ] Re-fetch all changed text files and both PDFs from `main`.
- [ ] Confirm the final `main` head and report the exact QA evidence.

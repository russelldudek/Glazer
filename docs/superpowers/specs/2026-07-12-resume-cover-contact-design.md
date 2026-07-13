# Resume and Cover Letter Contact Header Design

## Goal

Add Russell Dudek's complete contact information and the Southern Glazer's campaign site to the resume and cover-letter headers, while preserving the exact two-page resume and one-page cover-letter outputs. Mention the campaign site briefly and directly in the cover-letter body.

## Approved contact presentation

Use one compact contact line with active links:

`Pittsburgh, Pennsylvania · 412.287.8640 · russelldudek@gmail.com · linkedin.com/in/russelldudek · russelldudek.github.io/Glazer/`

Link targets:

- Phone: `tel:+14122878640`
- Email: `mailto:russelldudek@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/russelldudek`
- Candidate site: `https://russelldudek.github.io/Glazer/`

## Surface decisions

- Resume page one replaces the current location/site metadata with the complete contact line.
- Resume page two includes the same contact line in a compact continuation-header treatment.
- The cover letter includes the complete contact line beneath Russell's name.
- The cover-letter body appends this approved sentence to the Model Reliability Contract paragraph:

  `I developed a role-specific candidate vision at russelldudek.github.io/Glazer/ to demonstrate the Reliability Interlock, supporting operating model, and first-120-day approach.`

- Use real clickable anchors in web view and visible human-readable text in print/PDF.
- Preserve the existing independent-candidate and employer-brand treatments.

## Layout constraints

- Resume PDF remains exactly two US Letter pages.
- Cover-letter PDF remains exactly one US Letter page.
- Contact links may wrap only when necessary; they must not overlap, clip, or force an extra page.
- Web-only document controls remain hidden from print.
- Existing reciprocal resume/cover-letter navigation remains intact.

## Validation

- Test the required contact values and link targets before and after implementation.
- Render both HTML documents at desktop and mobile widths.
- Regenerate both PDFs from the updated HTML.
- Confirm exact page counts, openability, selectable text, and visual balance.
- Smoke-test the campaign index after the shared CSS update.

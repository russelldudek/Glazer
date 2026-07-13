from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
resume = (ROOT / "resume.html").read_text(encoding="utf-8")
cover = (ROOT / "cover-letter.html").read_text(encoding="utf-8")

required_links = [
    'href="tel:+14122878640"',
    'href="mailto:russelldudek@gmail.com"',
    'href="https://www.linkedin.com/in/russelldudek"',
    'href="https://russelldudek.github.io/Glazer/"',
]

for link in required_links:
    assert link in resume, f"resume missing {link}"
    assert link in cover, f"cover letter missing {link}"

assert resume.count('class="doc-meta contact-line') == 2
assert cover.count('class="doc-meta contact-line') == 1
assert "I developed a role-specific candidate vision at" in cover

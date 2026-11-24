"""Set browser-visible Korean PDF document titles without changing page content.

Run only on the static export directory, after 'next build', so the GitHub
source PDFs and verified multipart originals remain untouched.
"""
from __future__ import annotations

import sys
from pathlib import Path

import fitz  # PyMuPDF

DOCUMENT_TITLES = {
    "han-soohyun-resume-and-cover-letter.pdf": "한수현 | 이력서 · 자기소개서",
    "medi-bridge-plan-and-wireframes.pdf": "메디브릿지 | 기획서 및 화면설계서",
    "aqui-planning-and-wireframes.pdf": "아키 | 기획서 및 화면설계서",
    "hanatour-report-and-wireframes.pdf": "하나투어 앱 UX/UI 개선 | 보고서 및 화면설계서",
    "jeju-emergency-presentation.pdf": "제주형 차세대 응급의료 정보시스템 | 발표자료",
    "weverse-presentation.pdf": "위버스 미디어 탐색 경로 개선 | 발표자료",
    "weverse-report-and-wireframes.pdf": "위버스 미디어 탐색 경로 개선 | 보고서 및 화면설계서",
    "momoa-planning.pdf": "모모아 | 기획서",
    "rocket-fresh-report.pdf": "쿠팡 로켓프레시 메인화면 리뉴얼 | 기획서",
    "kaywon-renewal-report.pdf": "계원예술대학교 웹사이트 리뉴얼 | 기획서",
}


def update_title(pdf_path: Path, title: str) -> None:
    if not pdf_path.is_file():
        raise FileNotFoundError(f"Published project PDF is missing: {pdf_path}")

    with fitz.open(pdf_path) as pdf:
        if pdf.is_encrypted:
            raise RuntimeError(f"Encrypted PDF cannot be titled: {pdf_path.name}")
        pages_before = len(pdf)
        original_metadata = dict(pdf.metadata)
        if original_metadata.get("title") != title:
            original_metadata["title"] = title
            pdf.set_metadata(original_metadata)
            pdf.saveIncr()  # Metadata-only incremental update; keep pages & links intact.

    with fitz.open(pdf_path) as verified:
        if verified.metadata.get("title") != title or len(verified) != pages_before:
            raise RuntimeError(f"PDF metadata verification failed: {pdf_path.name}")
    print(f"[PDF title] {pdf_path.name}: {title} ({pages_before} pages)")


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Usage: python scripts/set-pdf-titles.py out/documents")
    documents_dir = Path(sys.argv[1])
    for filename, title in DOCUMENT_TITLES.items():
        update_title(documents_dir / filename, title)


if __name__ == "__main__":
    main()

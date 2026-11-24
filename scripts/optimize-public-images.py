"""Losslessly reduce heavyweight PNGs in the deployed build, if possible.

The original repository images and their appearance are not changed.
Pixel equality is checked before replacing a file in 'out/'.
"""
from __future__ import annotations

import os
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageChops

TARGETS = (
    "crayfish-shore-usfws-print.png",
    "lobster-dorsal-screened.png",
    "lobster-horizontal-halftone.png",
)


def optimize_png(file: Path) -> None:
    if not file.exists():
        print(f"[Image optimization] Not present: {file.name}")
        return
    before_size = file.stat().st_size
    with Image.open(file) as im:
        im.load()
        reference_pixels = im.convert("RGBA").tobytes()
        optimized = im

        # An RGB image whose channels are exactly equal can be kept losslessly
        # as 8-bit grayscale, often saving a substantial amount of PNG data.
        if im.mode == "RGB":
            r, g, b = im.split()
            if ImageChops.difference(r, g).getbbox() is None and ImageChops.difference(r, b).getbbox() is None:
                optimized = im.convert("L")

        attrs = {}
        if im.info.get("icc_profile"):
            attrs["icc_profile"] = im.info["icc_profile"]

        fd, tmpname = tempfile.mkstemp(prefix=file.stem + ".", suffix=".png", dir=file.parent)
        os.close(fd)
        try:
            optimized.save(tmpname, format="PNG", optimize=True, compress_level=9, **attrs)
            with Image.open(tmpname) as verified:
                if verified.convert("RGBA").tobytes() != reference_pixels:
                    raise RuntimeError(f"Pixel mismatch after optimization: {file.name}")
            after_size = os.path.getsize(tmpname)
            if after_size < before_size:
                os.replace(tmpname, file)
                print(f"[Image optimization] {file.name}: {before_size:,} -> {after_size:,} bytes (pixel-identical)")
            else:
                print(f"[Image optimization] {file.name}: already efficient ({before_size:,} bytes)")
        finally:
            if os.path.exists(tmpname):
                os.remove(tmpname)


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Usage: python scripts/optimize-public-images.py out/images")
    root = Path(sys.argv[1])
    for filename in TARGETS:
        optimize_png(root / filename)


if __name__ == "__main__":
    main()

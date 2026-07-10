from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

try:
    import imageio_ffmpeg
except ImportError as exc:
    raise SystemExit("Install imageio-ffmpeg: pip install imageio-ffmpeg") from exc

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "client-assets"
DST = ROOT / "public" / "videos" / "hero"
POSTER_DST = ROOT / "public" / "images" / "hero-poster.jpg"

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

LEFT_SRC = SRC / (
    "AQOePA9oLShEQiNvLXv-_suhGhjhELDDTsEen2mOJG-hKc5_ZdDVGLh1DkLtmaw4NApOflW6en4pbNi3NCpO3xsiMO_E8u4OoFhKDCEaGvbtVA.mp4"
)
RIGHT_SRC = SRC / (
    "AQPEwNNCbzvJC_3Y3MXKvA_ydnhhyaTSyUWA3nDQY-U6jYpc2i8DTo0zVbuhGDlzrL-kbKKPu6OHC6oG1SCm8c8hFhi7whty_yGqwo_7AxNYRA.mp4"
)

EXPORTS: list[tuple[Path, str, float, float]] = [
    (LEFT_SRC, "left.mp4", 0, 15),
    (RIGHT_SRC, "right.mp4", 18, 15),
]


def export_loop(src: Path, rel: str, start: float, duration: float) -> None:
    if not src.exists():
        print(f"SKIP missing: {src}")
        return

    out = DST / rel
    out.parent.mkdir(parents=True, exist_ok=True)

    cmd = [
        FFMPEG,
        "-y",
        "-ss",
        str(start),
        "-i",
        str(src),
        "-t",
        str(duration),
        "-vf",
        "scale=1080:-2:flags=lanczos",
        "-c:v",
        "libx264",
        "-crf",
        "26",
        "-preset",
        "medium",
        "-movflags",
        "+faststart",
        "-pix_fmt",
        "yuv420p",
        "-an",
        str(out),
    ]

    print(f"Export {rel}")
    subprocess.run(cmd, check=True)


def export_poster(src: Path) -> None:
    if not src.exists():
        return

    POSTER_DST.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        FFMPEG,
        "-y",
        "-ss",
        "6",
        "-i",
        str(src),
        "-frames:v",
        "1",
        "-q:v",
        "2",
        "-update",
        "1",
        str(POSTER_DST),
    ]
    print("Export hero poster")
    subprocess.run(cmd, check=True)


def copy_reference_poster() -> None:
    candidates = sorted(SRC.glob("WhatsApp Image*.jpeg"))
    if not candidates:
        return

    POSTER_DST.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(candidates[0], POSTER_DST)
    print(f"Copied poster {candidates[0].name}")


def main() -> None:
    for src, rel, start, duration in EXPORTS:
        export_loop(src, rel, start, duration)

    if LEFT_SRC.exists():
        export_poster(LEFT_SRC)
    else:
        copy_reference_poster()

    print("Done.")


if __name__ == "__main__":
    main()

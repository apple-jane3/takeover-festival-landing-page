from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

try:
    import imageio_ffmpeg
except ImportError as exc:
    raise SystemExit("Install imageio-ffmpeg: pip install imageio-ffmpeg") from exc

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "client-assets" / "video_20260713_123415.mp4"
DST_VIDEO = ROOT / "public" / "videos" / "hero" / "hero.mp4"
DST_POSTER = ROOT / "public" / "images" / "hero" / "poster.jpg"

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing hero source video: {SRC}")

    DST_VIDEO.parent.mkdir(parents=True, exist_ok=True)
    DST_POSTER.parent.mkdir(parents=True, exist_ok=True)

    shutil.copy2(SRC, DST_VIDEO)

    subprocess.run(
        [
            FFMPEG,
            "-y",
            "-ss",
            "2",
            "-i",
            str(DST_VIDEO),
            "-frames:v",
            "1",
            "-q:v",
            "2",
            "-update",
            "1",
            str(DST_POSTER),
        ],
        check=True,
    )

    print("Copied hero video and poster.")


if __name__ == "__main__":
    main()

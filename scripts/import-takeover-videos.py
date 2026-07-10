from __future__ import annotations

import subprocess
from pathlib import Path

try:
    import imageio_ffmpeg
except ImportError as exc:
    raise SystemExit("Install imageio-ffmpeg: pip install imageio-ffmpeg") from exc

SRC = Path(r"D:\nova\apple\TAKEOVER")
DST = Path(r"D:\nova\apple\takeover-festival-landing-page\public\videos\takeover")

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

VIDEO_EXPORTS: list[tuple[Path, str, float | None, bool]] = [
    (
        SRC / "NINA (07-04)" / "MVI_6397.MOV",
        "hero-loop.mp4",
        12,
        False,
    ),
    (
        SRC / "NINA (07-04)" / "MVI_6419.MOV",
        "festival-promo.mp4",
        45,
        True,
    ),
    (
        SRC / "MYMP (07-01)" / "PHOTOS AND VIDEOS" / "MVI_7586.MOV",
        "highlights/mymp.mp4",
        30,
        True,
    ),
    (
        SRC / "PARAMORE NIGHT (06-27)" / "FIONA" / "MVI_6195.MOV",
        "highlights/fiona.mp4",
        None,
        True,
    ),
]


def export_video(src: Path, rel: str, max_seconds: float | None, with_audio: bool) -> None:
    if not src.exists():
        print(f"SKIP missing: {src}")
        return

    out = DST / rel
    out.parent.mkdir(parents=True, exist_ok=True)

    cmd = [
        FFMPEG,
        "-y",
        "-i",
        str(src),
    ]
    if max_seconds:
        cmd.extend(["-t", str(max_seconds)])

    cmd.extend(
        [
            "-vf",
            "scale=1280:-2",
            "-c:v",
            "libx264",
            "-crf",
            "28",
            "-preset",
            "medium",
            "-movflags",
            "+faststart",
            "-pix_fmt",
            "yuv420p",
        ]
    )

    if with_audio:
        cmd.extend(["-c:a", "aac", "-b:a", "128k"])
    else:
        cmd.append("-an")

    cmd.append(str(out))

    print(f"Export video {rel}")
    subprocess.run(cmd, check=True)


def main() -> None:
    for src, rel, max_seconds, with_audio in VIDEO_EXPORTS:
        export_video(src, rel, max_seconds, with_audio)
    print("Done.")


if __name__ == "__main__":
    main()

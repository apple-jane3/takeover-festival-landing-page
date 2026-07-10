from pathlib import Path

import numpy as np
from PIL import Image, ImageOps

try:
    import rawpy
except ImportError:
    rawpy = None

SRC = Path(r"D:\nova\apple\TAKEOVER")
DST = Path(r"D:\nova\apple\takeover-festival-landing-page\public\images\takeover")

MAX_WIDTH = 1920
THUMB_WIDTH = 1200
ARTIST_FRAME = (1200, 1500)
QUALITY = 82


def normalize_image(img: Image.Image) -> Image.Image:
    img = ImageOps.exif_transpose(img)
    if img.mode != "RGB":
        return img.convert("RGB")
    return img


def load_image(path: Path) -> Image.Image:
    if path.suffix.lower() == ".cr2":
        if rawpy is None:
            raise RuntimeError(f"rawpy required for {path}")
        with rawpy.imread(str(path)) as raw:
            rgb = raw.postprocess(use_camera_wb=True)
        return Image.fromarray(rgb)
    return normalize_image(Image.open(path))


def save_web(path: Path, img: Image.Image, max_width: int = MAX_WIDTH) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if img.width > max_width:
        ratio = max_width / img.width
        img = img.resize((max_width, int(img.height * ratio)), Image.LANCZOS)
    img.save(path, "JPEG", quality=QUALITY, optimize=True)


def save_artist_thumb(path: Path, img: Image.Image) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    target_w, target_h = ARTIST_FRAME
    target_ratio = target_w / target_h
    src_ratio = img.width / img.height

    if src_ratio > target_ratio:
        crop_h = img.height
        crop_w = int(crop_h * target_ratio)
        left = (img.width - crop_w) // 2
        img = img.crop((left, 0, left + crop_w, crop_h))
    else:
        crop_w = img.width
        crop_h = int(crop_w / target_ratio)
        top = 0
        img = img.crop((0, top, crop_w, top + crop_h))

    img = img.resize(ARTIST_FRAME, Image.LANCZOS)
    img.save(path, "JPEG", quality=QUALITY, optimize=True)


def export(src: Path, rel: str, max_width: int = MAX_WIDTH) -> str:
    out = DST / rel
    save_web(out, load_image(src), max_width)
    return f"/images/takeover/{rel.replace(chr(92), '/')}"


def main() -> None:
  mappings: list[tuple[Path, str, int]] = [
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "1.JPG", "gallery/paramore-night-01.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "3.JPG", "gallery/paramore-night-03.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "8.JPG", "gallery/paramore-night-08.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "12.JPG", "gallery/paramore-night-12.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "19.JPG", "gallery/paramore-night-19.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "22.JPG", "gallery/paramore-night-22.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "28.JPG", "gallery/paramore-night-28.jpg", MAX_WIDTH),
    (SRC / "NINA (07-04)" / "IMG_6409.JPG", "gallery/nina-6409.jpg", MAX_WIDTH),
    (SRC / "NINA (07-04)" / "IMG_6413.JPG", "gallery/nina-6413.jpg", MAX_WIDTH),
    (SRC / "NINA (07-04)" / "IMG_6430.JPG", "gallery/nina-6430.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "FIONA" / "IMG_6221.JPG", "gallery/fiona-6221.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "PIXIEDAZE" / "IMG_6109.JPG", "gallery/pixiedaze-6109.jpg", MAX_WIDTH),
    (SRC / "MYMP (07-01)" / "PHOTOS AND VIDEOS" / "BEST SHOTS" / "1.CR2", "artists/mymp.jpg", THUMB_WIDTH),
    (SRC / "MYMP (07-01)" / "PHOTOS AND VIDEOS" / "BEST SHOTS" / "10.CR2", "artists/mymp-alt.jpg", THUMB_WIDTH),
    (SRC / "NINA (07-04)" / "IMG_6409.JPG", "artists/nina.jpg", THUMB_WIDTH),
    (SRC / "SIAKOL & THE YOUTH (07-04)" / "SIAKOL" / "IMG_7676.CR2", "artists/siakol.jpg", THUMB_WIDTH),
    (SRC / "SIAKOL & THE YOUTH (07-04)" / "THE YOUTH" / "IMG_7640.CR2", "artists/the-youth.jpg", THUMB_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "8.JPG", "hero.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "19.JPG", "experience.jpg", MAX_WIDTH),
    (SRC / "NINA (07-04)" / "IMG_6430.JPG", "about.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "4.JPG", "countdown.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "15.JPG", "venue.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "6.JPG", "crowd.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "11.JPG", "expo-crowd.jpg", MAX_WIDTH),
    (SRC / "NINA (07-04)" / "IMG_6410.JPG", "community.jpg", MAX_WIDTH),
    (SRC / "PARAMORE NIGHT (06-27)" / "BEST SHOTS" / "2.JPG", "food-park.jpg", MAX_WIDTH),
    (SRC / "NINA (07-04)" / "IMG_6364.JPG", "wellness.jpg", MAX_WIDTH),
  ]

  for src, rel, width in mappings:
    if not src.exists():
      print(f"SKIP missing: {src}")
      continue
    print(f"Export {rel}")
    image = load_image(src)
    if rel.replace("\\", "/").startswith("artists/"):
      save_artist_thumb(DST / rel, image)
    else:
      save_web(DST / rel, image, width)

  print("Done.")


if __name__ == "__main__":
  main()

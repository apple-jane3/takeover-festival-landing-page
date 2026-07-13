import html
import re
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image

POSTS = [
    (
        'boracay-fb-laboracay.jpg',
        'https://www.facebook.com/TakeOverLounge/posts/boracay-or-la-unionchoose-your-takeover-laboracay-takeover-labor-union-weekendap/985139520845550/',
    ),
    (
        'boracay-fb-tnc.jpg',
        'https://www.facebook.com/TNCnow/posts/upcoming-event-i-boracay-are-you-ready-takeover-beach-music-festival-is-bringing/1404843021668184/',
    ),
]

OUT_DIR = Path(__file__).resolve().parents[1] / 'public' / 'images' / 'takeover' / 'gallery'
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
MAX_WIDTH = 1920
QUALITY = 82


def save_web(path: Path, img: Image.Image) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if img.width > MAX_WIDTH:
        ratio = MAX_WIDTH / img.width
        img = img.resize((MAX_WIDTH, int(img.height * ratio)), Image.LANCZOS)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    img.save(path, 'JPEG', quality=QUALITY, optimize=True)


def main() -> None:
    for name, url in POSTS:
        page = requests.get(url, headers=HEADERS, timeout=30)
        page.raise_for_status()
        match = re.search(r'og:image" content="([^"]+)"', page.text)
        if not match:
            print(f'SKIP no og:image: {name}')
            continue
        img_url = html.unescape(match.group(1))
        print(f'Downloading {name}...')
        response = requests.get(
            img_url,
            headers={**HEADERS, 'Referer': 'https://www.facebook.com/'},
            timeout=30,
        )
        response.raise_for_status()
        image = Image.open(BytesIO(response.content))
        out = OUT_DIR / name
        save_web(out, image)
        print(f'Saved {out} ({image.size})')


if __name__ == '__main__':
    main()

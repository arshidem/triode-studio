import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";
const directory = "public/assets/posters";
const output = join(directory, "optimized");
await mkdir(output, { recursive: true });
let before = 0,
  after = 0;
for (const name of await readdir(directory)) {
  if (!/\.(png|jpg)$/i.test(name)) continue;
  const input = join(directory, name);
  before += (await stat(input)).size;
  for (const width of [480, 800, 1200]) {
    const destination = join(output, `${parse(name).name}-${width}.webp`);
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(destination);
    if (width === 480) after += (await stat(destination)).size;
  }
}
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#FDFDFB"/><rect x="64" y="64" width="1072" height="502" rx="16" fill="none" stroke="#0a0a0a" stroke-width="3"/><g font-family="sans-serif" fill="#0a0a0a"><text x="110" y="230" font-size="84" font-weight="700">Triode Studio</text><text x="110" y="330" font-size="38">Websites. Apps. Creative campaigns.</text><text x="110" y="470" font-size="26">A three-person digital studio in Kerala, India.</text></g></svg>`;
await sharp(Buffer.from(svg)).png().toFile("public/social-card.png");
console.log(
  `Poster source size: ${(before / 1e6).toFixed(1)} MB; 480px thumbnails: ${(after / 1e6).toFixed(2)} MB.`,
);

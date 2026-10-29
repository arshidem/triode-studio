export default function PosterImage({
  poster,
  large = false,
  eager = false,
  className,
}) {
  const stem = poster.image
    .split("/")
    .pop()
    .replace(/\.(png|jpg)$/, "");
  const base = `/assets/posters/optimized/${stem}`;
  return (
    <img
      className={className}
      src={`${base}-${large ? 1200 : 480}.webp`}
      srcSet={`${base}-480.webp 480w, ${base}-800.webp 800w, ${base}-1200.webp 1200w`}
      sizes={
        large
          ? "(max-width: 768px) 90vw, 700px"
          : "(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 30vw"
      }
      alt={`${poster.title} — ${poster.objective}`}
      width="600"
      height="900"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

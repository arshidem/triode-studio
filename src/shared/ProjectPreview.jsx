import { Link } from "react-router-dom";
export default function ProjectPreview({ project }) {
  const screen = project.screenshots?.[0];
  if (!screen) return null;
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`project-preview ${screen.width < screen.height ? "project-preview-mobile" : ""}`}
      aria-label={`View ${project.title} project and screenshots`}
    >
      <img
        src={screen.thumbnail}
        srcSet={
          screen.width > 640
            ? `${screen.thumbnail} 640w, ${screen.src} ${screen.width}w`
            : undefined
        }
        sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 30vw"
        width={screen.width}
        height={screen.height}
        alt={screen.alt}
        loading="lazy"
        decoding="async"
      />
      {screen.demo && <span className="preview-demo-label">Demo data</span>}
    </Link>
  );
}

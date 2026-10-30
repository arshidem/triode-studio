import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
export default function PageHeader({
  backTo,
  backLabel,
  eyebrow,
  title,
  description,
}) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow page-header-eyebrow">{eyebrow}</p>}
      <div className="page-title-row">
        <Link
          className="page-back"
          to={backTo}
          aria-label={backLabel}
          title={backLabel}
        >
          <FiArrowLeft aria-hidden="true" />
        </Link>
        <h1>{title}</h1>
      </div>
      {description && (
        <p className="intro page-header-description">{description}</p>
      )}
    </header>
  );
}

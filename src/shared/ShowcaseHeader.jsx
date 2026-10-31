import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function ShowcaseHeader({ title }) {
  return (
    <header className="showcase-app-bar">
      <div className="showcase-app-bar-inner">
        <Link
          to="/portfolio"
          className="showcase-back"
          aria-label="Back to all work"
          title="Back to all work"
        >
          <FiArrowLeft aria-hidden="true" />
        </Link>
        <h1>{title}</h1>
      </div>
    </header>
  );
}

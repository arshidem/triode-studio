import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
export default function NotFound() {
  useSEO();
  return (
    <section className="detail-page">
      <p className="eyebrow">404</p>
      <h1>We could not find that page.</h1>
      <p>
        The link may have changed. Explore our services or tell us what you
        need.
      </p>
      <div className="link-row">
        <Link className="button" to="/">
          Back to Home
        </Link>
        <Link className="text-link" to="/services">
          Explore Services →
        </Link>
      </div>
    </section>
  );
}

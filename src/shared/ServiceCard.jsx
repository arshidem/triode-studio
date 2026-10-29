import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";
export default function ServiceCard({
  title,
  description,
  href = "/services",
}) {
  return (
    <article className={styles.serviceCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="text-link" to={href}>
        Explore service →
      </Link>
    </article>
  );
}

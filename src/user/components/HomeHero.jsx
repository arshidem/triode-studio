import { Link } from "react-router-dom";
import { postersData } from "../data/postersData";
import PosterImage from "../../shared/PosterImage";
import styles from "../styles/HomeHero.module.css";
export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Triode Studio · Kerala, India</p>
          <h1 id="home-hero-title" className={styles.title}>
            Websites, apps, and creative campaigns for growing businesses.
          </h1>
          <p className={styles.lede}>
            We are a three-person studio combining development, design, and
            marketing. From your first website to app interfaces, posters, and
            AI videos, we help turn your ideas into useful digital work.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} to="/contact">
              Discuss Your Project →
            </Link>
            <Link className={styles.secondaryAction} to="/portfolio">
              View Our Work →
            </Link>
          </div>
          <div className={styles.proofList}>
            <span>Direct contact with the team</span>
            <span>Clear project scope</span>
            <span>Design and development together</span>
          </div>
        </div>
        <figure className="hero-work">
          <Link to="/posters" aria-label="Explore our poster design collection">
            <div className="hero-poster-grid">
              {postersData.slice(0, 2).map((poster) => (
                <PosterImage key={poster.id} poster={poster} eager />
              ))}
            </div>
          </Link>
          <figcaption>
            Selected poster design explorations ·{" "}
            <Link className="text-link" to="/posters">
              Explore the collection →
            </Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

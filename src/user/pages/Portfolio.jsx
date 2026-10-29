import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { projects } from "../data/projects";
import { postersData } from "../data/postersData";
import PosterImage from "../../shared/PosterImage";
export default function Portfolio() {
  useSEO();
  return (
    <div className="detail-page portfolio-page">
      <p className="eyebrow">Selected work</p>
      <h1>Products, concepts, and creative explorations.</h1>
      <p className="intro">
        Explore what we make and the thinking behind it. Each project is labeled
        with its context.
      </p>
      <section>
        <h2>Development and product design</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <p className="eyebrow">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p>{project.category}</p>
              <Link className="text-link" to={`/portfolio/${project.slug}`}>
                Read project overview →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="section-heading">
          <div>
            <h2>Posters & visual design</h2>
            <p>
              Selected visual explorations. Brand names in artwork do not imply
              a client relationship.
            </p>
          </div>
          <Link className="text-link" to="/posters">
            View all posters →
          </Link>
        </div>
        <div className="poster-grid">
          {postersData.slice(0, 6).map((poster) => (
            <article className="poster-tile" key={poster.id}>
              <Link
                to={`/posters#${poster.id}`}
                aria-label={`View ${poster.title} poster`}
              >
                <PosterImage poster={poster} />
              </Link>
              <h3>{poster.title}</h3>
              <p>{poster.category}</p>
              <span className="project-label">Design exploration</span>
            </article>
          ))}
        </div>
      </section>
      <section className="detail-cta">
        <h2>Need creative work for a campaign?</h2>
        <p>
          We also offer AI-assisted video production. Tell us about your
          message, format, and audience.
        </p>
        <div className="link-row">
          <Link className="button" to="/contact">
            Discuss Your Project →
          </Link>
          <Link className="text-link" to="/services/ai-video-production">
            Explore AI video production →
          </Link>
        </div>
      </section>
    </div>
  );
}

import ProjectScreenshots from "../../shared/ProjectScreenshots";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import useSEO from "../hooks/useSEO";
import NotFound from "./NotFound";
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  useSEO();
  if (!project) return <NotFound />;
  return (
    <article className="detail-page">
      <header className="showcase-intro">
        <p className="eyebrow">{project.type}</p>
        <p className="intro">{project.summary}</p>
      </header>
      <ProjectScreenshots key={project.slug} project={project} />
      <section>
        <h2>The challenge</h2>
        <p>{project.challenge}</p>
      </section>
      <section>
        <h2>Our approach</h2>
        <p>{project.approach}</p>
      </section>
      <section>
        <h2>Project focus</h2>
        <ul>
          {project.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Technology explored</h2>
        <p>{project.technology.join(" · ")}</p>
      </section>
      <p>
        This overview describes the project work and design direction. It does
        not claim measured client results.
      </p>
      <Link className="text-link" to={`/services/${project.service}`}>
        Explore the related service →
      </Link>
      <section className="detail-cta">
        <h2>Have a similar challenge?</h2>
        <Link className="button" to="/contact">
          Discuss Your Project →
        </Link>
      </section>
    </article>
  );
}

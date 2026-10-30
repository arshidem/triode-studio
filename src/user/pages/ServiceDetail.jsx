import PageHeader from "../../shared/PageHeader";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import useSEO from "../hooks/useSEO";
import NotFound from "./NotFound";
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  useSEO();
  if (!service) return <NotFound />;
  return (
    <article className="detail-page">
      <PageHeader
        backTo="/services"
        backLabel="Back to all services"
        eyebrow="Triode Studio · Kerala"
        title={service.title}
        description={service.description}
      />
      <section>
        <h2>Who it is for</h2>
        <p>{service.audience}</p>
      </section>
      <section>
        <h2>What we can deliver</h2>
        <ul>
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Your proposal confirms the exact scope and revision rounds.</p>
      </section>
      <section>
        <h2>How we work</h2>
        <p>{service.process}</p>
      </section>
      <section>
        <h2>What we need from you</h2>
        <p>{service.inputs}</p>
      </section>
      <section>
        <h2>Support and project scope</h2>
        <p>{service.support}</p>
      </section>
      {service.project && (
        <Link className="text-link" to={`/portfolio/${service.project}`}>
          Explore a related studio project →
        </Link>
      )}
      {slug === "poster-design" && (
        <Link className="text-link" to="/posters">
          Browse the poster collection →
        </Link>
      )}
      <section className="detail-cta">
        <h2>Tell us about your {service.title.toLowerCase()} project.</h2>
        <p>We will review your requirements and suggest a scope.</p>
        <Link
          className="button"
          to={`/contact?service=${encodeURIComponent(service.title)}`}
        >
          Discuss Your Project →
        </Link>
      </section>
    </article>
  );
}

import { Link } from "react-router-dom";
import { services } from "../data/services";
import styles from "../styles/ServicesShowcase.module.css";
export default function ServicesShowcase() {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={styles.header}>
        <span>What we make</span>
        <h1 id="services-title">
          Websites, apps, and creative work for your next step.
        </h1>
        <p>
          Choose the support your business needs. We agree the deliverables,
          timeline, and cost before starting.
        </p>
      </div>
      <div className={styles.matrix}>
        {services.map((service) => (
          <article key={service.slug} className={styles.service}>
            <div className={styles.content}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link className="text-link" to={`/services/${service.slug}`}>
                Explore {service.title.toLowerCase()} →
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.ctaBand}>
        <h2>Not sure where to start?</h2>
        <p>
          Tell us what you want to achieve, and we will help define a practical
          scope.
        </p>
        <Link to="/contact">Discuss Your Project →</Link>
      </div>
    </section>
  );
}

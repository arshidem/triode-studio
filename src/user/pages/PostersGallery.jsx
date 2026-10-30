import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PageHeader from "../../shared/PageHeader";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { postersData } from "../data/postersData";
import AccessibleDialog from "../../shared/AccessibleDialog";
import PosterImage from "../../shared/PosterImage";
export default function PostersGallery() {
  useSEO();
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All", ...new Set(postersData.map((p) => p.category))];
  const posters =
    category === "All"
      ? postersData
      : postersData.filter((p) => p.category === category);
  const poster = selected === null ? null : posters[selected];
  useEffect(() => {
    if (selected === null) return;
    const handle = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        setSelected(
          (i) =>
            (i + (event.key === "ArrowLeft" ? -1 : 1) + posters.length) %
            posters.length,
        );
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [selected, posters.length]);
  return (
    <div className="detail-page portfolio-page">
      <PageHeader
        backTo="/portfolio"
        backLabel="Back to all work"
        eyebrow="Visual design"
        title="Creative posters collection."
        description="Explore visual direction, product imagery, and campaign design. These are design explorations; brand names shown do not imply commissioned client work."
      />
      <div
        className="filter-chips"
        role="group"
        aria-label="Filter posters by category"
      >
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            aria-pressed={cat === category}
            onClick={() => {
              setCategory(cat);
              setSelected(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="poster-grid">
        {posters.map((item, index) => (
          <article className="poster-tile" id={item.id} key={item.id}>
            <button
              className="poster-open"
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Enlarge ${item.title} poster`}
            >
              <PosterImage poster={item} />
            </button>
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            <p>{item.tagline}</p>
          </article>
        ))}
      </div>
      {poster && (
        <AccessibleDialog
          title={poster.title}
          onClose={() => setSelected(null)}
        >
          <div className="lightbox-layout">
            <div className="lightbox-image">
              <PosterImage poster={poster} large eager />
              {posters.length > 1 && (
                <>
                  <button
                    className="lightbox-arrow lightbox-arrow-left"
                    type="button"
                    onClick={() =>
                      setSelected(
                        (i) => (i - 1 + posters.length) % posters.length,
                      )
                    }
                    aria-label="Previous poster"
                  >
                    <FiChevronLeft aria-hidden="true" />
                  </button>
                  <button
                    className="lightbox-arrow lightbox-arrow-right"
                    type="button"
                    onClick={() => setSelected((i) => (i + 1) % posters.length)}
                    aria-label="Next poster"
                  >
                    <FiChevronRight aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
            <div>
              <p className="eyebrow">Design exploration</p>
              <h3>Objective & concept</h3>
              <p>{poster.objective}</p>
              <h3>Tools used</h3>
              <p>{poster.tools.join(" · ")}</p>
              <p role="status">
                {selected + 1} of {posters.length}
              </p>
            </div>
          </div>
        </AccessibleDialog>
      )}
      <section className="detail-cta">
        <h2>Have a poster or campaign in mind?</h2>
        <Link className="button" to="/contact?service=Posters%20%26%20Graphics">
          Discuss Your Project →
        </Link>
      </section>
    </div>
  );
}

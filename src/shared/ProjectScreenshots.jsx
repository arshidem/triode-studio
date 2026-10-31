import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import AccessibleDialog from "./AccessibleDialog";
export default function ProjectScreenshots({ project }) {
  const [selected, setSelected] = useState(null);
  const screens = project.screenshots || [];
  const current = selected === null ? null : screens[selected];
  useEffect(() => {
    if (selected === null || screens.length < 2) return;
    const handle = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        setSelected(
          (i) =>
            (i + (event.key === "ArrowLeft" ? -1 : 1) + screens.length) %
            screens.length,
        );
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [selected, screens.length]);
  if (!screens.length) return null;
  return (
    <section
      className="project-screenshots"
      aria-labelledby="project-screens-heading"
    >
      <h2 id="project-screens-heading">A look inside {project.title}</h2>
      <p>
        Captured from the running interface. Select a screen to take a closer
        look.
      </p>
      <div className="project-screen-grid">
        {screens.map((screen, index) => (
          <figure
            key={screen.src}
            className={
              screen.width < screen.height ? "project-screen-mobile" : ""
            }
          >
            <button
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Enlarge ${screen.label}`}
            >
              <img
                src={screen.src}
                width={screen.width}
                height={screen.height}
                alt={screen.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="screen-zoom" aria-hidden="true">
                <FiMaximize2 />
              </span>
            </button>
            <figcaption>{screen.label}</figcaption>
          </figure>
        ))}
      </div>
      {current && (
        <AccessibleDialog
          title={current.label}
          onClose={() => setSelected(null)}
        >
          <div
            className="lightbox-image project-screen-lightbox"
            style={{ "--screen-aspect": current.width / current.height }}
          >
            <img
              src={current.src}
              width={current.width}
              height={current.height}
              alt={current.alt}
            />
            {screens.length > 1 && (
              <>
                <button
                  className="lightbox-arrow lightbox-arrow-left"
                  type="button"
                  aria-label="Previous screen"
                  onClick={() =>
                    setSelected(
                      (i) => (i - 1 + screens.length) % screens.length,
                    )
                  }
                >
                  <FiChevronLeft aria-hidden="true" />
                </button>
                <button
                  className="lightbox-arrow lightbox-arrow-right"
                  type="button"
                  aria-label="Next screen"
                  onClick={() => setSelected((i) => (i + 1) % screens.length)}
                >
                  <FiChevronRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>
          <p className="screen-counter" role="status">
            {selected + 1} of {screens.length}
          </p>
        </AccessibleDialog>
      )}
    </section>
  );
}

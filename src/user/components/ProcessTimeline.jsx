import styles from "../styles/ProcessTimeline.module.css";
const steps = [
  ["Discovery", "We discuss your audience and project goals."],
  ["Design", "We map the experience and review the design."],
  ["Development", "We build the agreed functionality."],
  ["Launch", "We test and prepare the work for delivery."],
];
export default function ProcessTimeline() {
  return (
    <section className={styles.timelineSection}>
      <h2>How we work</h2>
      {steps.map(([title, description], index) => (
        <article className={styles.stepCard} key={title}>
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </section>
  );
}

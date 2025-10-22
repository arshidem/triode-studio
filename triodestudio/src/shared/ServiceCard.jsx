// Enhanced ServiceCard component
const ServiceCard = ({ image, title, description, features, technologies, startingPrice, index }) => {
  return (
    <motion.div
      className={styles.serviceCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {/* Image Section */}
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title}
          fill
          className={styles.serviceImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.imageOverlay} />
      </div>

      {/* Content Section */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        
        {/* Features List */}
        {features && (
          <div className={styles.features}>
            <h4>Key Features:</h4>
            <ul>
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && (
          <div className={styles.technologies}>
            <h4>Technologies:</h4>
            <div className={styles.techTags}>
              {technologies.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        )}

        {/* Pricing */}
        {startingPrice && (
          <div className={styles.pricing}>
            <span className={styles.startingFrom}>Starting from</span>
            <span className={styles.price}>{startingPrice}</span>
          </div>
        )}

        {/* CTA Button */}
        <button className={styles.learnMoreBtn}>
          Learn More
        </button>
      </div>
    </motion.div>
  );
};
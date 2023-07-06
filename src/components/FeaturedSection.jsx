const FeaturedSection = () => {
  return (
    <section id="featured" className="featured container section">
      <h3 className="featured__subtitle">Featured project</h3>
      <div className="featured__wrapper">
        <h2 className="featured__title">3D Apple store</h2>
        <a
          href="https://three-store.netlify.app/"
          target="_blank"
          className="featured__link"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <p className="featured__description">
        A recent project that I enjoyed doing is a web page based on Apple's
        website page selling the Iphone 14 using <strong>ThreeJS</strong>, a
        library allowing developper to add <strong>3D models</strong> to their
        website
      </p>
      <div className="featured__info-container">
        <div>
          <h3 className="featured__label">Tech stack</h3>
          <ul className="featured__tech-stack">
            <li className="featured__info">React</li>
            <li className="featured__info">Three</li>
            <li className="featured__info">Blender</li>
            <li className="featured__info">TypeScript</li>
            <li className="featured__info">WebGI</li>
          </ul>
        </div>
        <div>
          <h3 className="featured__label">Project type</h3>
          <p className="featured__info">Front end 3D store</p>
        </div>
        <div>
          <h3 className="featured__label">Timeline</h3>
          <p className="featured__info">June - July 2023</p>
        </div>
      </div>
      <div className="featured__img_container">
        <div className="featured__img-wrapper">
          <img loading="lazy" src="/sc1.png" alt="My app" />
        </div>
        <div className="featured__img-wrapper">
          <img loading="lazy" src="/sc2.png" alt="My app" />
        </div>
        <div className="featured__img-wrapper">
          <img loading="lazy" src="/sc3.png" alt="My app" />
        </div>
        <div>
          <video controls width="100%" alt="Demo">
            <source src="/vid.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

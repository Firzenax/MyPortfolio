const AboutSection = () => {
  return (
    <section id="about" className="about container section">
      <div className="about__content">
        <h2 className="about__title">About</h2>
        <p className="about__description">
          Hey ! I'm Louis, a <strong>Software engineer</strong> specialized in
          full stack web developement currently located in Paris
        </p>
        <p className="about__description">
          My goal is to sharpen my skill to the point where I can work remotely
          while traveling around the world{" "}
          <strong>(maybe go back to Kuala Lumpur like in this photo)</strong>
        </p>
        <p className="about__description">
          My other passions are <strong>rock climbing</strong>,{" "}
          <strong>volleyball</strong> as well as playing
          <strong> electric and bass guitar</strong>
        </p>
        <hr className="about__hr" />
        <h3 className="about__subtitle">Stack</h3>
        <div className="about__ul-container">
          <ul className="about__ul">
            <li className="about__list">React</li>
            <li className="about__list">Node</li>
            <li className="about__list">JavaScript</li>
          </ul>
          <ul className="about__ul">
            <li className="about__list">TypeScript</li>
            <li className="about__list">MongoDB</li>
            <li className="about__list">SQL</li>
          </ul>
        </div>
      </div>
      <div className="about_image-wrapper">
        <img
          loading="lazy"
          src="/klpic.jpg"
          alt="Me at Kuala Lumpur"
          className="about__img"
        />
      </div>
    </section>
  );
};

export default AboutSection;

const HeroSection = () => {
  return (
    <section className="hero container">
      <img src="/pic.jpeg" alt="Profile picture" className="hero__image" />
      <h2 className="hero__subtitle">Hi I'm Louis</h2>
      <h1 className="hero__title">
        Software <br /> Engineer
      </h1>
      <p className="hero__description">
        A curious and passionated <strong>Software Engineer</strong> specialized
        in full stack web devlopement using a stack{" "}
        <strong>React & Node</strong>{" "}
      </p>
      <a className="hero__btn btn" href="#">
        Reach out
      </a>
    </section>
  );
};
export default HeroSection;

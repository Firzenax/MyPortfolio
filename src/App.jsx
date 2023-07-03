import "../styles/App.css";

function App() {
  return (
    <>
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <a href="#about" className="header__link">
                About
              </a>
            </li>
            <li>
              <a href="#featured" className="header__link">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="header__link">
                Contact
              </a>
            </li>
            <li className="header__line"></li>
            <li>
              <button className="header__sun">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li>
              <a href="#" className="header__resume"></a>
            </li>
          </ul>
          <button className="header__bars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <img src="/pic.jpeg" alt="Profile picture" className="hero__image" />
          <h2 className="hero__subtitle">Hi I'm Louis</h2>
          <h1 className="hero__title">
            Software <br /> Engineer
          </h1>
          <p className="hero__description">
            A curious and passionated <strong>Software Engineer</strong>{" "}
            specialized in full stack web devlopement using a stack{" "}
            <strong>React & Node</strong>{" "}
          </p>
          <a className="hero__btn btn" href="#">
            Reach out
          </a>
        </section>
        <section className="about container section">
          <div className="about__content">
            <h2 className="about__title">About</h2>
            <p className="about__description">
              Hey ! I'm Louis, a <strong>Software engineer</strong> specialized
              in full stack web developement currently located in Paris
            </p>
            <p className="about__description">
              My goal is to sharpen my skill to the point where I can work
              remotely while traveling around the world{" "}
              <strong>
                (maybe go back to Kuala Lumpur like in this photo)
              </strong>
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
            {/* !TODO ADD PICTURE */}
            <img
              src="/pic.jpeg"
              alt="Me at Kuala Lumpur"
              className="about__img"
            />
          </div>
        </section>
        <section className="featured container section">
          <h3 className="featured__subtitle">Featured project</h3>
          <div className="featured__wrapper">
            <h2 className="featured__title">3D Apple store</h2>
            <a href="" className="featured__link">
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
            library allowing developper to add <strong>3D models</strong> to
            their website
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
        </section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

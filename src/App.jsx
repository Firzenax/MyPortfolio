import "../styles/App.css";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <HeaderSection />
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
        <section id="about" className="about container section">
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
            <img
              loading="lazy"
              src="/klpic.jpg"
              alt="Me at Kuala Lumpur"
              className="about__img"
            />
          </div>
        </section>
        <section id="featured" className="featured container section">
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
        <section className="work container section">
          <h2 className="work__title">Projects</h2>
          <p className="work__description">
            Here are some of the project that I've done recently :
          </p>
          <div className="work__container">
            <h3 className="work__project-title">Blog</h3>
            <div className="work__img-wrapper  work__image1">
              <img loading="lazy" src="/blogsc.png" alt="My react blog" />
            </div>
            <div className="work__project work__content1">
              <h3 className="work__project-subtitle">Blog</h3>
              <p className="work__project-description1">
                A full stack web app project where I created a blog
              </p>
              <p className="work__project-description2">
                I used a stack React, Node and MongoDB while also using the
                library React Query and the UI Kit Chakra{" "}
              </p>
              <a
                className="btn work__project-btn"
                href="https://github.com/Firzenax/React-blog"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
            </div>

            <h3 className="work__project-title">OpenAI</h3>
            <div className="work__img-wrapper  work__image2">
              <img loading="lazy" src="/openaisc.png" alt="My ChatGPT" />
            </div>
            <div className="work__project work__content2">
              <h3 className="work__project-subtitle">OpenAI</h3>
              <p className="work__project-description1">
                A full stack web app project where I created a replica of
                chatGPT
              </p>
              <p className="work__project-description2">
                I used a stack React, Node, Express and the open API of OpenAI
              </p>
              <a
                className="btn work__project-btn"
                href="https://github.com/Firzenax/openapi"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
            </div>
            <h3 className="work__project-title">Mern JWT authentificator</h3>
            <div className="work__img-wrapper  work__image3">
              <img loading="lazy" src="/mernsc.png" alt="My auth app" />
            </div>
            <div className="work__project work__content3">
              <h3 className="work__project-subtitle">
                Mern JWT authentificator
              </h3>
              <p className="work__project-description1">
                A full stack web app project where I created an authentification
                service.
              </p>
              <p className="work__project-description2">
                I used a stack React, Node, Express to create an
                authentification application using the regulation GDPR for the
                protection of personal data
              </p>
              <a
                className="btn work__project-btn"
                href="https://github.com/Firzenax/react-mern-auth"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
            </div>
            <h3 className="work__project-title">Hospital service</h3>
            <div className="work__img-wrapper  work__image4">
              <img
                loading="lazy"
                src="/hospitalsc.png"
                alt="My SQL architecture"
              />
            </div>
            <div className="work__project work__content4">
              <h3 className="work__project-subtitle">Hospital service</h3>
              <p className="work__project-description1">
                A back end project using the structure of an hospital
              </p>
              <p className="work__project-description2">
                I used a stack Spring java with an SQL database to create all
                the request necessary for the operation of an hospital
              </p>
              <a
                className="btn work__project-btn"
                href="https://github.com/Firzenax/HospitalAppAngularSpringSQL"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
            </div>
            <h3 className="work__project-title">Flutter cross platform app</h3>
            <div className="work__img-wrapper  work__image5">
              <img loading="lazy" src="/notesc.png" alt="My note app" />
            </div>
            <div className="work__project work__content5">
              <h3 className="work__project-subtitle">
                Flutter cross platform app
              </h3>
              <p className="work__project-description1">
                A full stack web app project where I created a replica of
                chatGPT
              </p>
              <p className="work__project-description2">
                I used a stack React, Noden, Express and the open API of OpenAI
              </p>
              <a
                className="btn work__project-btn"
                href="https://github.com/Firzenax/Flutter-My-Notes"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="contact container section">
          <h2 className="contact__title">Get in touch</h2>
          <p className="contact__description">
            If you want to reach me, whether it is for some questions or for
            some opportunities in the world of web developpement, you will find
            below a link for my email. I'll get back to you ass soon as possible
            !!!
          </p>
          <a
            href="mailto:louis.20160437@gmail.com"
            className="contact__btn btn"
            target="_blank"
            rel="noreferrer"
          >
            Reach out !
          </a>
        </section>
      </main>
      <footer className="footer container section">
        <h3 className="footer__title">~ Louis Tran ~</h3>
      </footer>
    </>
  );
}

export default App;

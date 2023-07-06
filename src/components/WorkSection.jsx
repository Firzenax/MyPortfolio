const WorkSection = () => {
  return (
    <section className="work container section">
      <h2 className="work__title">Projects</h2>
      <p className="work__description">
        Here are some of the project that I've done recently :
      </p>
      <div className="work__container">
        <div className="separation ">
          <h3 className="work__project-title">Blog</h3>
          <div className="work__img-wrapper  work__image1">
            <img loading="lazy" src="/blogsc.png" alt="My react blog" />
          </div>
        </div>

        <div className=" separation work__project work__content1">
          <h3 className="work__project-subtitle">Blog</h3>
          <p className="work__project-description1">
            A full stack web app project where I created a blog
          </p>
          <p className="work__project-description2">
            I used a stack React, Node and MongoDB while also using the library
            React Query and the UI Kit Chakra{" "}
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
        <div>
          <h3 className="work__project-title">OpenAI</h3>
          <div className="work__img-wrapper  work__image2">
            <img loading="lazy" src="/openaisc.png" alt="My ChatGPT" />
          </div>
        </div>

        <div className="separation work__project work__content2">
          <h3 className="work__project-subtitle">OpenAI</h3>
          <p className="work__project-description1">
            A full stack web app project where I created a replica of chatGPT
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
        <div className="separation ">
          <h3 className="work__project-title">Mern JWT authentificator</h3>
          <div className="work__img-wrapper  work__image3">
            <img loading="lazy" src="/mernsc.png" alt="My auth app" />
          </div>
        </div>

        <div className="separation work__project work__content3">
          <h3 className="work__project-subtitle">Mern JWT authentificator</h3>
          <p className="work__project-description1">
            A full stack web app project where I created an authentification
            service.
          </p>
          <p className="work__project-description2">
            I used a stack React, Node, Express to create an authentification
            application using the regulation GDPR for the protection of personal
            data
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
        <div className="separation ">
          <h3 className="work__project-title">Hospital service</h3>
          <div className="work__img-wrapper  work__image4">
            <img
              loading="lazy"
              src="/hospitalsc.png"
              alt="My SQL architecture"
            />
          </div>
        </div>

        <div className="separation work__project work__content4">
          <h3 className="work__project-subtitle">Hospital service</h3>
          <p className="work__project-description1">
            A back end project using the structure of an hospital
          </p>
          <p className="work__project-description2">
            I used a stack Spring java with an SQL database to create all the
            request necessary for the operation of an hospital
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
        <div className="separation">
          <h3 className="work__project-title">Flutter cross platform app</h3>
          <div className=" work__img-wrapper  work__image5">
            <img loading="lazy" src="/notesc.png" alt="My note app" />
          </div>
        </div>

        <div className="separation work__project work__content5">
          <h3 className="work__project-subtitle">Flutter cross platform app</h3>
          <p className="work__project-description1">
            A full stack web app project where I created a replica of chatGPT
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
  );
};

export default WorkSection;

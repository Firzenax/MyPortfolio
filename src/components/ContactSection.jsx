const ContactSection = () => {
  return (
    <section id="contact" className="contact container section">
      <h2 className="contact__title">Get in touch</h2>
      <p className="contact__description">
        If you want to reach me, whether it is for some questions or for some
        opportunities in the world of web developpement, you will find below a
        link for my email. I'll get back to you ass soon as possible !!!
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
  );
};

export default ContactSection;

import "../styles/App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturedSection from "./components/FeaturedSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";

function App() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedSection />
        <WorkSection />
        <ContactSection />
      </main>
      <footer className="footer container section">
        <h3 className="footer__title">~ Louis Tran ~</h3>
      </footer>
    </>
  );
}

export default App;

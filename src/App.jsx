import { useWindowSize } from "./hooks/useWindowSize";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { isMobile } = useWindowSize();

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "var(--bg)" }}>
      <Navbar />
      <main style={{
        flex: 1,
        marginLeft: isMobile ? "0" : "300px",
        marginTop: isMobile ? "56px" : "0",
        transition: "margin 0.3s ease, background-color 0.3s ease",
        width: isMobile ? "100%" : "calc(100% - 300px)",
        backgroundColor: "var(--bg)",
      }}>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
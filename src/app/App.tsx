import Navbar from "../components/navbar/Navbar"
import Hero from "../sections/Hero/Hero"
import About from "../sections/About/About"
import Projects from "../sections/Projects/Projects"
import Skills from "../sections/Skills/Skills"
import Contact from "../sections/Contact/Contact"
import Footer from "../components/footer/Footer"
//import CustomCursor from '../components/cursor/CustomCursor'

function App() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            {/*<CustomCursor />*/}
            <Navbar />

            <main className="pt-32">

                <section
                    id="hero"
                    className="min-h-screen flex items-center justify-center"
                >
                    <Hero />
                </section>

                <section
                    id="about"
                    className="min-h-screen flex items-center justify-center"
                >
                    <About />
                </section>

                <section
                    id="projects"
                    className="min-h-screen flex items-center justify-center"
                >
                    <Projects />
                </section>

                <section
                    id="skills"
                    className="min-h-screen flex items-center justify-center"
                >
                    <Skills />
                </section>

                <section
                    id="contact"
                    className="min-h-screen flex items-center justify-center"
                >
                    <Contact />
                </section>

            </main>

            <Footer />

        </div>
    )
}

export default App
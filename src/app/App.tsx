//import '../App.css'
import Navbar from "../components/navbar/Navbar"
import Hero from "../sections/Hero/Hero"
import About from "../sections/About/About"
import Projects from "../sections/Projects/Projects"
import Skills from "../sections/Skills/Skills"
import Contact from "../sections/Contact/Contact"

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    )
}

export default App

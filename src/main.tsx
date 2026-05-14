import React from "react"
import ReactDOM from "react-dom/client"
import App from './app/App.tsx'
import "./styles/globals.css"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"
// import Lenis from '@studio-freight/lenis'

// const lenis = new Lenis({
//     duration: 1.2,
//     smoothWheel: true,
// })
//
// function raf(time: number) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }
//
// requestAnimationFrame(raf)
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        < LanguageProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </LanguageProvider>
    </React.StrictMode>
)

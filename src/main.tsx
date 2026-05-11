//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react"
import ReactDOM from "react-dom/client"
import App from './app/App.tsx'
import "./styles/globals.css"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </ThemeProvider>
    </React.StrictMode>
)
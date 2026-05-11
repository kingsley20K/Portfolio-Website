// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from './app/App.tsx'
// import "./styles/globals.css"
// import { ThemeProvider } from "./context/ThemeContext"
// import { LanguageProvider } from "./context/LanguageContext"
//
// ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//         <ThemeProvider>
//             <LanguageProvider>
//                 <App />
//             </LanguageProvider>
//         </ThemeProvider>
//     </React.StrictMode>
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/globals.css'

import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
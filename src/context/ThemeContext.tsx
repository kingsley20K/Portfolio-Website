import { createContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

export const ThemeContext = createContext<any>(null)

export function ThemeProvider({ children }: any) {
    const [theme, setTheme] = useState<Theme>("dark")

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
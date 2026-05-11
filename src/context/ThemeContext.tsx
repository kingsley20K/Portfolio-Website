import {
    createContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

type Props = {
    children: ReactNode
}

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null

        if (savedTheme) {
            return savedTheme
        }

        const systemTheme = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches

        return systemTheme ? 'dark' : 'light'
    })

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)

        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
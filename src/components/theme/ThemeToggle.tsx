import { useTheme } from "../../hooks/useTheme"

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme} className="px-3 py-2 rounded">
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
    )
}
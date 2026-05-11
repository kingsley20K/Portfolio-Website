import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="
        w-10 h-10
        rounded-xl
        border border-zinc-800
        flex items-center justify-center
        transition-all duration-300
        hover:bg-zinc-900
        hover:scale-105
        active:scale-95
      "
        >
            {theme === 'dark' ? (
                <Sun size={18} />
            ) : (
                <Moon size={18} />
            )}
        </button>
    )
}
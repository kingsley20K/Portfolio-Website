import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
                relative
                w-10 h-10 rounded-xl
                flex items-center justify-center
                border border-zinc-200 dark:border-zinc-800
                bg-white/60 dark:bg-white/5
                backdrop-blur-md
                text-zinc-500 dark:text-zinc-400
                hover:text-violet-600 dark:hover:text-violet-400
                hover:border-violet-400/50
                hover:scale-105 active:scale-95
                transition-all duration-200
            "
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
            </AnimatePresence>
        </button>
    )
}

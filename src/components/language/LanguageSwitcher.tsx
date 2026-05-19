import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'

const languages = [
    { code: 'en', flag: '🇬🇧', label: 'EN' },
    { code: 'de', flag: '🇩🇪', label: 'DE' },
    { code: 'fr', flag: '🇫🇷', label: 'FR' },
] as const

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage()

    return (
        <div className="
            flex items-center gap-1
            p-1 rounded-xl
            border border-zinc-200 dark:border-zinc-800
            bg-white/60 dark:bg-white/5
            backdrop-blur-md
        ">
            {languages.map(({ code, flag, label }) => {
                const active = language === code
                return (
                    <button
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className="relative px-2.5 py-1 rounded-lg text-xs font-medium transition-colors duration-200"
                    >
                        {active && (
                            <motion.span
                                layoutId="lang-pill"
                                className="absolute inset-0 rounded-lg bg-violet-600"
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className={`relative z-10 flex items-center gap-1 ${active ? 'text-white' : 'text-zinc-500 dark:text-zinc-400 hover:text-[var(--foreground)]'}`}>
                            <span>{flag}</span>
                            <span>{label}</span>
                        </span>
                    </button>
                )
            })}
        </div>
    )
}

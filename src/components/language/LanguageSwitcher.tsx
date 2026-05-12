import { useLanguage } from '../../hooks/useLanguage'

const languages = ['en', 'de', 'fr'] as const

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage()

    return (
        <div className="flex items-center gap-2">

            {languages.map(lang => {
                const active = language === lang

                return (
                    <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className={`
              px-3 py-1.5
              rounded-lg
              text-sm
              transition-all duration-300
              border
              ${
                            active
                                ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                                : 'border-zinc-800 text-zinc-500 hover:text-[var(--foreground)]'
                        }
            `}
                    >
                        {lang.toUpperCase()}
                    </button>
                )
            })}
        </div>
    )
}
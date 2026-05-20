import {
    createContext,
    useEffect,
    useState,
} from 'react'
import type {ReactNode} from 'react'
import en from '../i18n/en.json'
import de from '../i18n/de.json'
import fr from '../i18n/fr.json'

type Language = 'en' | 'de' | 'fr'

type Translation = typeof en

type LanguageContextType = {
    language: Language
    translations: Translation
    changeLanguage: (lang: Language) => void
}

export const LanguageContext =
    createContext<LanguageContextType | null>(null)

type Props = {
    children: ReactNode
}

const languages = {
    en,
    de,
    fr,
}

export function LanguageProvider({ children }: Props) {
    const [language, setLanguage] =
        useState<Language>(() => {
            return (
                (localStorage.getItem('language') as Language) ||
                'en'
            )
        })

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    const changeLanguage = (lang: Language) => {
        setLanguage(lang)
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                translations: languages[language] as Translation,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}
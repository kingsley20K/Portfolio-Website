import { createContext, useState } from "react"

export const LanguageContext = createContext<any>(null)

export function LanguageProvider({ children }: any) {
    const [lang, setLang] = useState("en")

    const changeLanguage = (l: string) => setLang(l)

    return (
        <LanguageContext.Provider value={{ lang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
import { ReactNode, createContext, useState, useContext, useEffect } from 'react'
import router from 'next/router'

interface LanguageContextValue {
    language: "Português" | "English"
    setLanguage: (language: "Português" | "English") => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<"Português" | "English">('Português')

    useEffect(() => {
        const { lang } = router.query;

        if (lang === 'en') {
            setLanguage('English');
        } else {
            setLanguage('Português');
        }
    }, [router.query]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export { LanguageProvider, useLanguage }
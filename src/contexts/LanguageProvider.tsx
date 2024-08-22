import { ReactNode, createContext, useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';

interface LanguageContextValue {
    language: "Português" | "English"
    setLanguage: (language: "Português" | "English") => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<"Português" | "English">('Português')
    const searchParams = useSearchParams();

    useEffect(() => {
        const lang = searchParams.get('lang');

        if (lang === 'en') {
            setLanguage('English');
        } else {
            setLanguage('Português');
        }
    }, [searchParams]);

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
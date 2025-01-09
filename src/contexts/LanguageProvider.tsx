import { ReactNode, createContext, useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';

type Languages = "Português" | "English"

type LanguageContextValue = {
    language: Languages
    changeLanguage: (language: Languages) => void
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<LanguageContextValue["language"]>('Português')
    const searchParams = useSearchParams();

    useEffect(() => {
        const storageLang = localStorage.getItem('lang');

        const lang = searchParams.get('lang');

        if (storageLang) {
            setLanguage(storageLang === 'pt' ? 'Português' : 'English');
        } else if (lang) {
            setLanguage(lang === 'pt' ? 'Português' : 'English');
        }
    }, [searchParams]);

    const changeLanguage = (language: LanguageContextValue["language"]) => {
        localStorage.setItem('lang', language === 'Português' ? 'pt' : 'en');
        setLanguage(language)
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
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
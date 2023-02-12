import React, { createContext, useState, useContext } from 'react'

interface LanguageContextValue {
    language: "Português" | "English"
    setLanguage: (language: "Português" | "English") => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<"Português" | "English">('Português')

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
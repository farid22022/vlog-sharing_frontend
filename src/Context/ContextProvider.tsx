// import { createContext, useContext, useState, ReactNode } from 'react';

// type Language = 'en' | 'bn'; // Add more languages if needed

// type TranslateContextType = {
//   currentLanguage: Language;
//   toggleLanguage: () => void;
//   setLanguage: (lang: Language) => void;
// };

// const TranslateContext = createContext<TranslateContextType | null>(null);

// export function TranslateProvider({ children }: { children: ReactNode }) {
//   const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  
//   const toggleLanguage = () => {
//     setCurrentLanguage(prev => prev === 'en' ? 'bn' : 'en');
//   };

//   const setLanguage = (lang: Language) => {
//     setCurrentLanguage(lang);
//   };

//   return (
//     <TranslateContext.Provider value={{ currentLanguage, toggleLanguage, setLanguage }}>
//       {children}
//     </TranslateContext.Provider>
//   );
// }

// export const useTranslate = () => {
//   const context = useContext(TranslateContext);
//   if (!context) throw new Error('useTranslate must be used within a TranslateProvider');
//   return context;
// };
// src/context/TranslateContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'bn'
type TranslateContextType = {
  currentLanguage: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const TranslateContext = createContext<TranslateContextType | null>(null)

export function TranslateProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  
  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'bn' : 'en')
  }

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
  }

  return (
    <TranslateContext.Provider value={{ currentLanguage, toggleLanguage, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  )
}

export const useTranslate = () => {
  const context = useContext(TranslateContext)
  if (!context) throw new Error('useTranslate must be used within a TranslateProvider')
  return context
}
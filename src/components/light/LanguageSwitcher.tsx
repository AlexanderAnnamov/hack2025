import {useState} from "react";

const languages = ['Ru', 'En']

const languageButtonStyle = (language: string, selectedLanguage: string): React.CSSProperties => {
  return {
    color: language === selectedLanguage ? '#41B30B' : '#8D8D8D',
    fontSize: 16
  }
}

const selectorStyle: React.CSSProperties = {
  fontWeight: 400,
  color: '#8D8D8D',
  fontSize: 16
}

export const LanguageSwitcher = () => {
  const [selected, setSelected] = useState('Ru')

  const handleSelectLanguage = (language: string) => {
    setSelected(language)
  }

  return <>
    {languages.map((language, id) => {
      if (id === languages.length - 1) {
        return <button style={languageButtonStyle(language, selected)}
                       onClick={() => handleSelectLanguage(language)}>{language}</button>
      }
      if (languages.length === 0) {
        return <button>{language}</button>
      }
      return <>
        <button style={languageButtonStyle(language, selected)}
                onClick={() => handleSelectLanguage(language)}>{language}</button>
        <span style={selectorStyle}>|</span>
      </>
    })
    }
  </>
}
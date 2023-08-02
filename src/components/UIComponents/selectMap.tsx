import { autoLanguage, supportedLanguages } from '../constants/constants'
import React from 'react'

interface SelectProps {
  langs : typeof autoLanguage | typeof supportedLanguages
  changeLang : (value : string) => void
  state : string
}

export const Select : React.FC<SelectProps> = ({ langs, changeLang, state }) => {
  const changeOption = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value
    changeLang(selectedLang)
  }

  return (
    <select name='fromLanguage' className='p-1 rounded border outline-none' onChange={changeOption} value={state}>
      {
        Object.entries(langs).map(lang => <option key={lang[0]} value={lang[0]}>{lang[1]}</option>)
      }
    </select>
  )
}

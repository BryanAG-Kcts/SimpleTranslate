export const supportedLanguages = {
  en: 'English',
  es: 'Español',
  zh: 'Chinese',
  de: 'Deutsch',
  it: 'Italiano',
  ja: 'Japanese',
  ko: 'Korean',
  la: 'Latín',
  pt: 'Português',
  ru: 'Russian'
}

export const autoLanguage = {
  auto: 'auto',
  ...supportedLanguages
}

export const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  toText: ''
}

export const translateEvents = {
  interChange: 'interchange_langs',
  setFrom: 'setFromLang',
  setTo: 'setToLang',
  setFromText: 'setFromText',
  setToText: 'setToText',
  resetFromText: 'resetFromText'
} as const

export type Action =
  | {type : typeof translateEvents.interChange}
  | {type : typeof translateEvents.setFrom, payload : string}
  | {type : typeof translateEvents.setTo, payload : string}
  | {type : typeof translateEvents.setFromText, payload: string}
  | {type : typeof translateEvents.resetFromText,}
  | {type : typeof translateEvents.setToText, payload: string}

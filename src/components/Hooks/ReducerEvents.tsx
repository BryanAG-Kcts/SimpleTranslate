import { useReducer } from 'react'
import { initialState, translateEvents } from '../constants/constants'
import { reducer } from '../TranslateEvents'

export const useTranslateEvents = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const interchangeLangs = () => dispatch({ type: translateEvents.interChange })
  const setFromLanguage = (value : string) => dispatch({ type: translateEvents.setFrom, payload: value })
  const setToLanguage = (value : string) => dispatch({ type: translateEvents.setTo, payload: value })

  const setFromText = (value : string) => dispatch({ type: translateEvents.setFromText, payload: value })
  const resetFromText = () => dispatch({ type: translateEvents.resetFromText })
  const setToText = (value : string) => dispatch({ type: translateEvents.setToText, payload: value })

  return {
    state,
    interchangeLangs,
    setFromLanguage,
    setToLanguage,
    setFromText,
    resetFromText,
    setToText
  }
}

import { Action, translateEvents, initialState } from './constants/constants'

export const reducer = (state : typeof initialState, action : Action) => {
  const { type } = action

  if (type === translateEvents.interChange) {
    if (state.fromLanguage === 'auto') return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      fromText: state.toText,
      toText: state.fromText
    }
  }

  if (type === translateEvents.setFrom) {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === translateEvents.setTo) {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === translateEvents.setFromText) {
    return {
      ...state,
      fromText: action.payload,
      toText: 'Cargando ...'
    }
  }

  if (type === translateEvents.resetFromText) {
    return {
      ...state,
      fromText: '',
      toText: ''
    }
  }

  if (type === translateEvents.setToText) {
    return {
      ...state,
      toText: action.payload
    }
  }

  return state
}

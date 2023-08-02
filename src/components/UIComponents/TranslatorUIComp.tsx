import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

import React, { useEffect, useRef } from 'react'

import { Select } from './selectMap'
import { supportedLanguages, autoLanguage } from '../constants/constants'
import { useTranslateEvents } from '../Hooks/ReducerEvents'

import { GetFetchToText } from '../services/TranslateFetch'

export const TranslatorUI = () => {
  const { state, interchangeLangs, setFromLanguage, setToLanguage, setFromText, resetFromText, setToText } = useTranslateEvents()
  const firstRender = useRef(true)

  const changeFromText = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const valueTextArea = e.target.value

    if (!valueTextArea) {
      resetFromText()
      return
      // El return para que no pase al código de abajo
    }
    setFromText(valueTextArea)
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const debounce = setTimeout(() => {
      const valueTextArea = state.fromText
      handleToText(valueTextArea)
    }, 800)

    return () => clearTimeout(debounce)
  }, [state.fromText, state.toLanguage, state.fromLanguage])

  async function handleToText (value : string) {
    const ala = await GetFetchToText(value, state.toLanguage, state.fromLanguage)
    setToText(ala.trans)
  }

  const setClipBoard = () => {
    navigator.clipboard.writeText(state.toText)
  }

  return (
    <>
      <h1 className='text-3xl font-semibold mb-7'>Simple Translate</h1>

      <main className='p-2 rounded w-full flex flex-col gap-4 bg-gray-300'>

        <div className='flex justify-between items-center'>
          <Select langs={autoLanguage} changeLang={setFromLanguage} state={state.fromLanguage} />
          <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={interchangeLangs} />
          <Select langs={supportedLanguages} changeLang={setToLanguage} state={state.toLanguage} />
        </div>

        <section className='flex flex-col gap-2 sm:flex-row'>
          <textarea name='fromTextLanguage' className='border-2 rounded resize-none outline-none p-2 min-h-[150px] sm:flex-1 sm:min-h-[350px]' onChange={changeFromText} value={state.fromText} />
          <div className='relative sm:flex-1 min-h-[150px] sm:min-h-[350px]'>
            <textarea name='toTextLanguage' className='w-full border-2 rounded resize-none outline-none p-2 h-full' disabled value={state.toText} />
            <FontAwesomeIcon icon={faClipboard} className='absolute text-xl bottom-4 left-4 cursor-pointer active:text-green-700' onClick={setClipBoard} />
          </div>
        </section>

        <pre>
          {
            JSON.stringify(state, null, 4)
          }
        </pre>

      </main>

    </>
  )
}

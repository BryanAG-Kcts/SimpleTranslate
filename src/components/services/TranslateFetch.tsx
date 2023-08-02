const url = 'https://cheap-translate-api.p.rapidapi.com/'
export async function GetFetchToText (value : string, toLang : string, fromLang : string) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'e2efe5cd5dmsh8ca13bd4331b69ep1db09bjsn2ce1f9e86ad6',
      'X-RapidAPI-Host': 'cheap-translate-api.p.rapidapi.com'
    },
    body: new URLSearchParams({
      q: value,
      target: toLang,
      source: fromLang
    })
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (e) {
    return 'Error en la traducción'
  }
}

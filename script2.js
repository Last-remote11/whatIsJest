const fetch = require('node-fetch');

const chuckNorris = fetch => {
  return fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      return {
        updated_at: data.updated_at,
        value: data.value
      }
    })
}
const aysyncChuckNorris = async (fetch) => {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const data = await response.json()
  return {
    updated_at: data.updated_at,
    value: data.value
  }
}

module.exports = {
  chuckNorris,
  aysyncChuckNorris
}
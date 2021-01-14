const API_KEY = "e1d21db6"
const BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`


// Generate a unique token for storing your nominations.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const search = (QUERY) =>
    fetch(`${BASE_URL}&s=${QUERY}`)
        .then(res => res.json())
        .then(data => data)

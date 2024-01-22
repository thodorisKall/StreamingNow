const API_KEY = process.env.MOVIES_API_KEY
const BASE_URL = process.env.MOVIES_BASE_URL

export const popular = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
      {
        next: { revalidate: 3600 },
      }
    )

    const data = await res.json()
    return data.results
  } catch (err) {
    console.error(err.message)
  }
}

export const movieIdDetails = async (movieId) => {
  try {
    const res = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)

    const data = await res.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const relatedMoviesList = async (movieId) => {
  try {
    const res = await fetch(
      `${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}`,
      {
        next: {
          revalidate: 20500,
        },
      }
    )
    const data = await res.json()
    return data.results
  } catch (err) {
    console.log(err.message)
  }
}

export const searchMovies = async (term) => {
  try {
    const res = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${term}`
    )
    const data = await res.json()
    return data.results
  } catch (err) {
    console.log(err.message)
  }
}

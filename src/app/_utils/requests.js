const API_KEY = process.env.MOVIES_API_KEY
const BASE_URL = process.env.MOVIES_BASE_URL

export const airingToday = async () => {
  try {
    const res = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`, {
      next: { revalidate: 3600 },
    })

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

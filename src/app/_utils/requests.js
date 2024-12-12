const API_KEY = process.env.MOVIES_API_KEY
const BASE_URL = process.env.MOVIES_BASE_URL

export const popularMovie = async () => {
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

export const popularTv = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=${API_KEY}`,
      {
        next: {
          revalidate: 20500,
        },
      }
    )
    const data = await res.json()
    return data.results
  } catch (err) {
    console.error(err.message)
  }
}

export const upcoming = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${API_KEY}`,
      {
        next: {
          revalidate: 20500,
        },
      }
    )
    const data = await res.json()
    return data.results
  } catch (err) {
    console.error(err.message)
  }
}

export const topRated = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${API_KEY}`,
      {
        next: {
          revalidate: 20500,
        },
      }
    )
    const data = await res.json()
    return data.results
  } catch (err) {
    console.error(err.message)
  }
}

export const nowPlaying = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${API_KEY}`,
      {
        next: {
          revalidate: 20500,
        },
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
    const res = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`, {
      next: {
        revalidate: 20500,
      },
    })

    const data = await res.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const relatedMoviesList = async (movieId) => {
  try {
    const res = await fetch(
      `${BASE_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`,
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

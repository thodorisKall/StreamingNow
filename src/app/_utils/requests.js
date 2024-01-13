const API_KEY = process.env.MOVIES_API_KEY

export const airingToday = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )

  const data = await res.json()
  return data.results
}

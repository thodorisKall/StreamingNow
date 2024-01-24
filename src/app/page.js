import { popularMovie, popularTv, upcoming } from "./_utils/requests"
import PopularMovies from "./(components)/PopularMovies"

export default async function Home() {
  return (
    <>
      <section className='main__page'>
        <h4>Popular Movies</h4>
        <PopularMovies fetch_func={popularMovie} />
        <h4>Popular TV Shows</h4>
        <PopularMovies fetch_func={popularTv} />
        <h4>Upcoming Movies</h4>
        <PopularMovies fetch_func={upcoming} />
      </section>
    </>
  )
}

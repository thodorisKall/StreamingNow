import PopularMovies from "../(components)/PopularMovies"
import { nowPlaying } from "../_utils/requests"

function page() {
  return (
    <section>
      <PopularMovies fetch_func={nowPlaying} />
    </section>
  )
}

export default page

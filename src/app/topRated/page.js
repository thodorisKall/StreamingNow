import PopularMovies from "../(components)/PopularMovies"
import { topRated } from "../_utils/requests"

function page() {
  return (
    <section>
      <PopularMovies fetch_func={topRated} />
    </section>
  )
}

export default page

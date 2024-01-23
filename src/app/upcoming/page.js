import { upcoming } from "../_utils/requests"
import PopularMovies from "../(components)/PopularMovies"

function page() {
  return (
    <section>
      <PopularMovies fetch_func={upcoming} />
    </section>
  )
}

export default page

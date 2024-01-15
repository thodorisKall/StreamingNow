import RelatedMovies from "../(components)/RelatedMovies"
import { relatedMoviesList } from "../_utils/requests.js"

async function RelatedMoviesLayout({ children, params }) {
  const { id } = params
  return (
    <>
      {children}
      <h2 className='text-2xl mb-6 text-c-blue font-bold'>RELATED MOVIES</h2>

      <RelatedMovies id={id} />
    </>
  )
}

export default RelatedMoviesLayout

import RelatedMovies from "../(components)/RelatedMovies"
import { relatedMoviesList } from "../_utils/requests.js"

async function RelatedMoviesLayout({ children, params }) {
  const { id } = params
  return (
    <>
      {children}
      <h2>Interna Layout</h2>
      <h2>{params.id}</h2>
      <RelatedMovies id={id} />
    </>
  )
}

export default RelatedMoviesLayout

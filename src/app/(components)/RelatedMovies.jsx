import Image from "next/image"
import { relatedMoviesList } from "../_utils/requests"

async function RelatedMovies({ id }) {
  const IMG_URL = process.env.MOVIES_IMAGE_BASE_URL
  const relatedMvs = await relatedMoviesList(id)
  console.log(relatedMvs)
  return (
    <section className='flex flex-wrap gap-4'>
      {relatedMvs.map((movie) => (
        <div>
          <Image
            src={`${IMG_URL}${movie.poster_path}`}
            width={194}
            height={288}
            alt='Picture of the author'
          />
          <h2>{movie.original_title}</h2>
        </div>
      ))}
      <h2>Related Movies Component</h2>
      <h2 className='text-pink-500'>{id}</h2>
    </section>
  )
}

export default RelatedMovies

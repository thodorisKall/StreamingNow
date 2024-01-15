import Image from "next/image"
import Link from "next/link"
import { relatedMoviesList } from "../_utils/requests"

async function RelatedMovies({ id }) {
  const IMG_URL = process.env.MOVIES_IMAGE_BASE_URL
  const relatedMvs = await relatedMoviesList(id)

  return (
    <section className='flex justify-between gap-4 lg:gap-10'>
      {relatedMvs.slice(0, 5).map((movie) => (
        <Link href={`/${movie.id}`} key={movie.id} className=''>
          <Image
            className='w-auto h-96 mb-2'
            src={`${IMG_URL}${movie.poster_path}`}
            width={258}
            height={382}
            alt={movie.original_title}
          />
          <h2 className='text-lg font-semibold'>
            {movie.original_title.length > 18
              ? movie.original_title.slice(0, 18).toUpperCase() + "..."
              : movie.original_title.toUpperCase()}
          </h2>
        </Link>
      ))}
    </section>
  )
}

export default RelatedMovies

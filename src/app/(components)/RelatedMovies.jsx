import Image from "next/image"
import Link from "next/link"
import { relatedMoviesList } from "../_utils/requests"

async function RelatedMovies({ id }) {
  const IMG_URL = process.env.MOVIES_IMAGE_BASE_URL
  const relatedMvs = await relatedMoviesList(id)

  return (
    <section className='flex flex-col  lg:flex-row lg:justify-between gap-y-8 mb-16 lg:gap-10'>
      {relatedMvs.slice(0, 5).map((movie) => (
        <Link href={`/${movie.id}`} key={movie.id} className='relative'>
          <Image
            className='w-full object-fit h-96 mb-2'
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
          <h3 className='absolute top-2 left-4 bg-c-red w-fit p-2 rounded-full'>
            {movie.vote_average.toFixed(1)}
          </h3>
          <h3 className='bg-c-blue absolute top-2 right-4 p-1 px-2  rounded-md'>
            {movie.original_language.toUpperCase()}
          </h3>
        </Link>
      ))}
    </section>
  )
}

export default RelatedMovies

import { airingToday } from "../_utils/requests.js"
import Image from "next/image"
import Link from "next/link"

async function SuggestMovies() {
  const movies = await airingToday()
  const img_url = process.env.MOVIES_IMAGE_BASE_URL

  return (
    <section className=''>
      <div className='flex justify-between flex-wrap '>
        {movies.map((movie) => (
          <Link href={`/${movie.id}`}>
            <div key={movie.id} className='relative mb-8'>
              <Image
                className='rounded-md mb-2 w-40 h-52 lg:w-60 lg:h-80'
                src={`${img_url}${movie.poster_path}`}
                width={240}
                height={314}
                alt={movie.original_title}
              />
              <h2
                id='suggestions_title'
                className=' text-base lg:text-xl font-semibold cursor-pointer'
              >
                {movie.original_title.length > 18
                  ? movie.original_title.slice(0, 18) + "..."
                  : movie.original_title}
              </h2>
              <h3 className='absolute top-2 left-4 bg-c-red w-fit p-2 rounded-2xl'>
                {movie.vote_average.toFixed(1)}
              </h3>
              <h3 className='bg-c-blue absolute top-2 right-4 p-1 rounded-md'>
                {movie.original_language}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SuggestMovies

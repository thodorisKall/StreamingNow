import Image from "next/image"
import Link from "next/link"

async function PopularMovies({ fetch_func }) {
  const movies = await fetch_func()
  const img_url = process.env.MOVIES_IMAGE_BASE_URL

  return (
    <section className='mb-8'>
      <div className='grid grid-cols-2 gap-y-6 gap-x-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-20 lg:gap-y-10'>
        {movies.slice(0, 12).map((movie) => (
          <Link href={`/${movie.id}`}>
            <div key={movie.id} className='w-fit'>
              <div className='relative'>
                <Image
                  className='rounded-md mb-2 h-52 w-auto md:w-auto md:h-72 lg:h-auto lg:w-full'
                  src={`${img_url}${movie.poster_path}`}
                  width='0'
                  height='0'
                  sizes='100vw'
                  alt={movie.title ? movie.title : movie.name}
                />
                <div>
                  <h3 className='absolute top-2 left-4 bg-c-red w-fit p-2 rounded-full'>
                    {movie.vote_average.toFixed(1)}
                  </h3>
                  <h3 className='absolute bg-c-blue bottom-2 left-4 p-1 px-2  rounded-md'>
                    {movie.original_language.toUpperCase()}
                  </h3>
                </div>
              </div>
              <h2
                id='suggestions_title'
                className=' text-base lg:text-xl font-semibold cursor-pointer'
              >
                {movie.title ? movie.title : movie.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PopularMovies

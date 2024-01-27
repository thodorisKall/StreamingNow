import Image from "next/image"
import Link from "next/link"

async function PopularMovies({ fetch_func }) {
  const movies = await fetch_func()
  const img_url = process.env.MOVIES_IMAGE_BASE_URL

  return (
    <section className='mb-8'>
      <div className='grid grid-cols-2 gap-x-2 md:grid-cols-3 lg:grid-cols-6  '>
        {movies.slice(0, 12).map((movie) => (
          <Link href={`/${movie.id}`}>
            <div key={movie.id} className=' mb-8  mr-2 lg:w-60'>
              <div className='relative'>
                <Image
                  className=' rounded-md mb-2 object-fit w-full h-52  lg:h-80'
                  src={`${img_url}${movie.poster_path}`}
                  width='0'
                  height='0'
                  sizes='100vw'
                  alt={movie.title ? movie.title : movie.name}
                />
                <h3 className='absolute top-2 left-4 bg-c-red w-fit p-2 rounded-full'>
                  {movie.vote_average.toFixed(1)}
                </h3>
                <h3 className='bg-c-blue absolute top-2 right-4 p-1 px-2  rounded-md'>
                  {movie.original_language.toUpperCase()}
                </h3>
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

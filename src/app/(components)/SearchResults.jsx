import { searchMovies } from "../_utils/requests.js"
import Image from "next/image"
import Link from "next/link"

async function SearchResults({ word }) {
  const IMG_URL = process.env.MOVIES_IMAGE_BASE_URL
  const results = await searchMovies(word)

  return (
    <section className=''>
      <h2 className='text-3xl mb-8'>
        {results.length} Results for:{" "}
        <span className='text-c-blue'>"{word}" </span>
      </h2>
      {results.length === 0 ? (
        <>
          <h2>
            Nothing Found for <span className='text-c-blue'>"{word}"</span>{" "}
          </h2>
          <h3>Try a different Search</h3>
        </>
      ) : (
        <div className='grid grid-cols-2 gap-y-10 '>
          {results.map((movie) => (
            <Link href={"/" + movie.id}>
              <div key={movie.id} className='relative mr-4 w-[800] h-96 '>
                <Image
                  className='relative object-fit w-full h-full opacity-15'
                  src={IMG_URL + movie.backdrop_path}
                  width={200}
                  height={500}
                  quality={100}
                  alt={movie.original_title}
                />
                <div className='absolute top-0 flex flex-col px-4  pt-4'>
                  <h2 className='text-xl mb-1 '>{movie.original_title}</h2>
                  <div className='flex'>
                    <Image
                      className='mr-2 '
                      src={IMG_URL + movie.poster_path}
                      width={200}
                      height={500}
                      alt={movie.original_title}
                    />

                    <div className='py-8'>
                      <div className='flex justify-around w-1/2 mb-2'>
                        <h3 className='bg-c-blue py-0.5 px-2 rounded-md'>
                          {movie.original_language.toUpperCase()}
                        </h3>
                        <h3 className=' bg-c-red p-2 rounded-full'>
                          {movie.vote_average.toFixed(1)}
                        </h3>
                      </div>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default SearchResults

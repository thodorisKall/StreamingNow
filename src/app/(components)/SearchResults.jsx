import { searchMovies } from "../_utils/requests.js"
import Image from "next/image"
import Link from "next/link"

async function SearchResults({ word }) {
  const IMG_URL = process.env.MOVIES_IMAGE_BASE_URL
  const results = await searchMovies(word)
  console.log(results)
  return (
    <section className=''>
      <h2 className='text-3xl mb-8'>
        {results.length} Results for: "{word}"
      </h2>
      {results.length === 0 ? (
        <>
          <h2>Nothing Found for "{word}"</h2>
          <h3>Try a different Search</h3>
        </>
      ) : (
        <div className='grid grid-cols-2 gap-y-10'>
          {results.map((movie) => (
            <Link href={"/" + movie.id}>
              <div key={movie.id} className=' grid grid-cols-2 mr-1 relative'>
                <div>
                  <h2 className='text-xl mb-1 '>{movie.original_title}</h2>
                  <Image
                    className=' '
                    src={IMG_URL + movie.poster_path}
                    width={200}
                    height={500}
                    alt={movie.original_title}
                  />
                </div>
                <div className='py-8'>
                  <div className='flex justify-around w-1/2'>
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
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default SearchResults

import { movieIdDetails } from "../_utils/requests.js"
import Image from "next/image"
import { IoPlay, IoAdd, IoShareSocial, IoTimeOutline } from "react-icons/io5"
import { RiMovie2Line } from "react-icons/ri"
import { FaImdb } from "react-icons/fa6"
import { MdOutlineLocalMovies } from "react-icons/md"

async function movieDetails({ params }) {
  const IMAGE_URL = process.env.MOVIES_IMAGE_BASE_URL
  const { id } = params
  const details = await movieIdDetails(id)
  const {
    poster_path,
    original_title,
    backdrop_path,
    overview,
    runtime,
    vote_average,
    genres,
  } = details

  return (
    <section className='flex bg-cover bg-center mb-24 '>
      <Image
        className='mr-4'
        src={`${IMAGE_URL}${poster_path}`}
        width={305}
        height={450}
        alt={original_title}
      />
      <div className='flex flex-col justify-around  h-96'>
        <h2 className='text-4xl font-bold'>{original_title.toUpperCase()}</h2>
        <div className='movieText flex justify-between w-1/2'>
          <h3>
            <IoTimeOutline />
            <span>{runtime}'</span>
          </h3>
          <h3 className='bg-gold p-1 rounded-lg'>
            <FaImdb />
            <span className='text-black'>{vote_average.toFixed(1)} </span>
          </h3>
          <div className='flex items-center'>
            <MdOutlineLocalMovies />
            {genres.map((gen) => (
              <h3 key={gen.id}>{gen.name + ",  "}</h3>
            ))}
          </div>
        </div>
        <p className='text-lg text-c-white'>{overview}</p>
        <div className='movieID flex justify-between'>
          <button>
            <IoPlay />
            <h3>Play</h3>
          </button>
          <button>
            <IoAdd />
            <h3>My List</h3>
          </button>
          <button>
            <RiMovie2Line />
            <h3>Trailer</h3>
          </button>
          <button>
            <IoShareSocial />
            <h3>Share</h3>
          </button>
        </div>
      </div>
    </section>
  )
}

export default movieDetails

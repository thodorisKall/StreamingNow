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
    <section className='movieID__container flex flex-col items-center relative mb-16 h-[1150px] overflow-x-scroll lg:overflow-hidden lg:h-[700px] '>
      <Image
        className='relative object-fit w-full h-full opacity-10'
        src={`${IMAGE_URL}${backdrop_path || poster_path}`}
        width={305}
        height={450}
        alt={original_title}
        quality={100}
      />

      <div className='flex flex-col lg:flex-row bg-cover bg-center mb-24 absolute top-10 left-2 px-4 lg:px-10'>
        <Image
          className='mb-4 w-96 h-auto lg:w-[455px] lg:mr-4'
          src={`${IMAGE_URL}${poster_path}`}
          width={305}
          height={450}
          alt={original_title}
        />
        <div className='movieDesc flex flex-col justify-around  w-11/12'>
          <h2 className='text-4xl font-bold mb-4 lg:mb-0'>
            {original_title.toUpperCase()}
          </h2>
          <div className='movieText flex justify-between mb-4 lg:mb-0 w-full lg:w-1/2 '>
            <h3 className='mr-4 lg:mr-0'>
              <IoTimeOutline />
              <span>{runtime}&apos;</span>
            </h3>
            <h3 className='bg-gold p-1 rounded-lg mr-4 lg:mr-0'>
              <FaImdb className='text-black' />
              <span className='text-black'>{vote_average.toFixed(1)} </span>
            </h3>
            <div className='flex items-center '>
              <MdOutlineLocalMovies className='text-c-blue' />
              {genres.map((gen) => (
                <h3 key={gen.id}>{gen.name + ",  "}</h3>
              ))}
            </div>
          </div>
          <p className='text-lg mb-9 lg:mb-0 text-c-white'>{overview}</p>
          <div className='movieID grid grid-cols-2 gap-x-4 lg:flex w-full py-2 h-fit gap-y-10 justify-between '>
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
      </div>
    </section>
  )
}

export default movieDetails

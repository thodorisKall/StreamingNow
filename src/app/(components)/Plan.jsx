import { MdOutlineSubscriptions } from "react-icons/md"
import { FaCheckDouble } from "react-icons/fa6"
import { IoIosArrowRoundForward } from "react-icons/io"

function Plan({ price, duration, type, quality }) {
  return (
    <div className='plan__box border-2 border-solid border-c-blue rounded-lg p-4 lg:h-fit lg:w-72'>
      <div className='border-b border-solid border-c-blue flex flex-col'>
        <h3 className='self-center text-c-blue text-4xl  mb-4 '>
          <MdOutlineSubscriptions />
        </h3>
        <h2>
          <span className='text-5xl'>{price}$</span> /Days
        </h2>
      </div>
      <div className=''>
        <h4>
          <span>
            <FaCheckDouble />
          </span>
          {duration + "  "} {type + "  "}Stream
        </h4>
        <h4>
          <span>
            <FaCheckDouble />
          </span>
          {quality + " "} HD Resolution
        </h4>
        <h4>
          <span>
            <FaCheckDouble />
          </span>
          Movies, Tv Shows, Live Tv
        </h4>
        <h4>
          <span>
            <FaCheckDouble />
          </span>
          Custom Request
        </h4>
        <h4>
          <span>
            <FaCheckDouble />
          </span>
          24/7 Support
        </h4>
      </div>
      <div className='flex justify-center'>
        <button className='bg-c-blue text-c-white rounded-md py-1 flex justify-center w-full lg:h-11'>
          CHOOSE PLAN
          <p className='text-c-white ml-2'>
            <IoIosArrowRoundForward />
          </p>
        </button>
      </div>
    </div>
  )
}

export default Plan

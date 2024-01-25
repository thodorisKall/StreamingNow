import { MdOutlineSubscriptions } from "react-icons/md"
import { FaCheckDouble } from "react-icons/fa6"
import { IoIosArrowRoundForward } from "react-icons/io"

function Plan({
  price,
  duration,
  type,
  quality,
  subscription,
  premium = false,
}) {
  const pickColor = `${premium ? "c-red" : "c-blue"}`
  return (
    <div
      className={`plan__box relative border-2 border-solid border-${pickColor} rounded-lg p-4 h-[420px] lg:h-fit lg:w-72`}
    >
      <div
        className={`border-b border-solid border-${pickColor} flex flex-col`}
      >
        <h3 className={`self-center text-${pickColor} text-4xl  mb-4 `}>
          <MdOutlineSubscriptions />
        </h3>
        <h2>
          <span className='text-5xl'>{price}$</span> /Days
        </h2>
      </div>
      <div className='h-1/2 flex flex-col justify-between'>
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

      <h4
        className={`subscription bg-${pickColor} w-fit h-8 px-10 rounded-md font-semibold flex justify-center mx-auto absolute top-[-16px] left-0`}
      >
        {subscription}
      </h4>

      <div className='flex justify-center'>
        <button
          className={`bg-${pickColor} text-c-white rounded-md py-1 flex justify-center w-full lg:h-11`}
        >
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

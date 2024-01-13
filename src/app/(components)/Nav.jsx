import { IoIosSearch } from "react-icons/io"
import { IoMoonOutlin, IoSunnyOutline } from "react-icons/io5"

import Image from "next/image"

function Nav() {
  return (
    <nav className=' flex h-12  justify-between items-center w-full lg:h-24 '>
      <Image
        src='/nowStreaming_icon.png'
        width={200}
        height={50}
        alt='now streaming website'
        quality={100}
      ></Image>
      <ul className='hidden lg:flex justify-between text-2xl w-1/3 cursor-pointer'>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>On Air</li>
      </ul>
      <div className='text-2xl w-24 flex justify-between'>
        <button>
          <IoIosSearch />
        </button>
        <button>
          <IoSunnyOutline />
        </button>
      </div>
    </nav>
  )
}

export default Nav

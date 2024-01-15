import Link from "next/link"
import { IoIosSearch } from "react-icons/io"
import { IoMoonOutlin, IoSunnyOutline } from "react-icons/io5"

import Image from "next/image"

function Nav() {
  return (
    <nav className='flex h-12 justify-between items-center w-full lg:h-24 mb-4'>
      <Image
        src='/nowStreaming_icon.png'
        width={200}
        height={50}
        alt='now streaming website'
        quality={100}
      ></Image>
      <ul className='hidden lg:flex justify-between text-2xl w-1/3 cursor-pointer'>
        <Link href={"/"}>
          <h2>Home</h2>
        </Link>
        <Link href={"/"}>
          <h2>Movies</h2>
        </Link>
        <Link href={"/"}>
          <h2>TV Shows</h2>
        </Link>
        <Link href={"/"}>
          <h2>On Air</h2>
        </Link>
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

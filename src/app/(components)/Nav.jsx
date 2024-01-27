"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { IoIosSearch } from "react-icons/io"
import { IoMoonOutlin, IoSunnyOutline, IoCloseSharp } from "react-icons/io5"
import { FaBars } from "react-icons/fa6"
//

function Nav() {
  const [searchText, setSearchText] = useState("")
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${searchText}`)
  }

  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center w-full h-fit lg:h-24 mb-4 mt-4 lg:mt-0 '>
      <Image
        src='/nowStreaming_icon.png'
        width={200}
        height={50}
        alt='now streaming website'
        quality={100}
        className='mb-4'
      ></Image>
      <ul className='hidden lg:flex justify-between text-2xl w-1/3 cursor-pointer font-semibold'>
        <Link href={"/"}>Home</Link>
        <Link href={"/topRated"}>Top Rated</Link>
        <Link href={"/onAir"}>On Air</Link>
        <Link href={"/upcoming"}>Upcoming</Link>
      </ul>

      <div className='text-2xl  flex justify-between'>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type='search'
            placeholder='Search Movie'
            className='bg-light_black py-0.5 px-2 w-1/ mr-2 text-xl text-grey-t !outline-none rounded-md'
          />
          <button type='submit'>
            <IoIosSearch />
          </button>
        </form>
        {/* <button>
        <IoSunnyOutline />
      </button> */}
      </div>
    </nav>
  )
}

export default Nav

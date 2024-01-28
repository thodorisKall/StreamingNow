"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { IoIosSearch } from "react-icons/io"
import { IoMoonOutlin, IoSunnyOutline } from "react-icons/io5"
import { FaBars } from "react-icons/fa6"
import { CgClose } from "react-icons/cg"
//

function Nav() {
  const [searchText, setSearchText] = useState("")
  const [showNav, setShowNav] = useState(false)
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${searchText}`)
  }

  return (
    <nav className='flex flex-col relative lg:flex-row justify-between items-center w-full h-fit lg:h-24 mb-4 mt-4 lg:mt-0 '>
      <Image
        src='/nowStreaming_icon.png'
        width={200}
        height={50}
        alt='now streaming website'
        quality={100}
        className='mb-4'
      ></Image>
      <button
        onClick={() => setShowNav(!showNav)}
        className='lg:hidden absolute right-0 text-xl text-c-white'
      >
        {showNav ? <CgClose /> : <FaBars />}
      </button>
      {showNav && (
        <div className='nav__sm lg:hidden bg-light_black flex flex-col w-full mb-4 pt-2 px-2'>
          <Link href={"/"}>Home</Link>
          <Link href={"/topRated"}>Top Rated</Link>
          <Link href={"/onAir"}>On Air</Link>
          <Link href={"/upcoming"}>Upcoming</Link>
        </div>
      )}
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

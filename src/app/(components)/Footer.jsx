"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLocationArrow,
} from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"

function Footer() {
  const [searchText, setSearchText] = useState("")
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${searchText}`)
  }
  return (
    <footer className='flex flex-col  lg:flex-row  lg:justify-between px-4 lg:px-20  py-16 bg-light_black lg:mt-14'>
      <div className='footer__address'>
        <Image
          className='mb-2 '
          src='/nowStreaming_icon.png'
          width={200}
          height={50}
          alt='now streaming website'
          quality={100}
        />
        <div className='mb-4 lg:mb-8'>
          <h3>West Attica</h3>
          <h3>Athens, GR</h3>
        </div>

        <div className='footer__icons flex w-1/2 lg:justify-around '>
          <Link href={"/"}>
            <FaTwitter />
          </Link>
          <Link href={"/"}>
            <FaFacebookF />
          </Link>
          <Link href={"/"}>
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className='footer__map flex flex-col '>
        <h2>SITE MAP</h2>
        <div className='text-lg font-semibold flex flex-col'>
          <Link href={"/"}>Home</Link>
          <Link href={"/topRated"}>Top Rated</Link>
          <Link href={"/onAir"}>On Air</Link>
          <Link href={"/upcoming"}>Upcoming</Link>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label className=''>Search Movie</label>
            <div>
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type='search'
                placeholder='Search '
                className='bg-light_black rounded-lg tracking-wider py-0.5 px-2 w-48 mr-2 text-xl text-grey-t border border-solid border-c-white'
              />
              <button type='submit' className='text-c-white hover:text-c-blue '>
                <IoIosSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-col '>
        <h2>NowStreaming</h2>
        <ul className='text-lg font-semibold'>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
          <li>Terms Of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footer__news flex flex-col justify-center'>
        <h2>Newsletter</h2>
        <p className='w-72 mb-2'>
          Subscribe Our Newsletter To Get Latest Update And News
        </p>
        <form className='flex flex-col'>
          <input
            type='email'
            placeholder='Your email'
            className='rounded-lg  mb-2'
          />
          <button className='rounded-lg bg-c-blue w-full lg:w-72 flex items-center justify-center'>
            <FaLocationArrow className='mr-2 text-c-white' />
            <h3>Subscribe Now</h3>
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer

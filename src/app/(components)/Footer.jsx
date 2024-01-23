import Image from "next/image"
import Link from "next/link"
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLocationArrow,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className=' flex justify-between px-4 lg:px-20  py-16 bg-light_black lg:mt-14'>
      <div className='footer__address'>
        <Image
          className='mb-2'
          src='/nowStreaming_icon.png'
          width={200}
          height={50}
          alt='now streaming website'
          quality={100}
        />
        <div className='mb-8'>
          <h3>West Attica</h3>
          <h3>Athens, GR</h3>
        </div>

        <div className='footer__icons flex w-1/2 justify-around '>
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
          <Link href={"/"}>Upcoming</Link>
          <Link href={"/"}>TV Shows</Link>
          <Link href={"/"}>On Air</Link>
          <Link href={"/"}>Top Rated</Link>
        </div>
      </div>
      <div className='footer__list flex flex-col '>
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
        <h2 className='      '>Newsletter</h2>
        <p className='w-72 mb-2'>
          Subscribe Our Newsletter To Get Latest Update And News
        </p>
        <form className='flex flex-col'>
          <input
            type='email'
            placeholder='Your email'
            className='rounded-lg mb-2'
          />
          <button className='rounded-lg bg-c-blue w-72 flex items-center justify-center'>
            <FaLocationArrow className='mr-2 text-c-white' />
            <h3>Subscribe Now</h3>
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer

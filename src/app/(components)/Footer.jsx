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
          <h2 className='font-xl'>West Attica</h2>
          <h2 className='font-xl'>Athens, GR</h2>
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
        <h2 className='font-xl text-c-blue'>SITE MAP</h2>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Upcoming</Link>
        <Link href={"/"}>TV Shows</Link>
        <Link href={"/"}>On Air</Link>
        <Link href={"/"}>Top Rated</Link>
      </div>
      <div className='footer__list flex flex-col '>
        <h2 className='font-xl text-c-blue'>NowStreaming</h2>
        <ul>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
          <li>Terms Of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className='flex flex-col justify-center'>
        <h2>Newsletter</h2>
        <p>Subscribe Our Newsletter To Get Latest Update And News</p>
        <form>
          <input type='email' placeholder='Your email' />
          <button>
            <FaLocationArrow /> Subscribe Now
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer

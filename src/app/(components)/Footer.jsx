import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className='flex justify-between py-20 '>
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
            <FaGithub />
          </Link>
          <Link href={"/"}>
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className='footer__map flex flex-col '>
        <h2 className='font-xl text-c-blue'>SITE MAP</h2>
        <Link href={"/"}>Home</Link>
        <h3>Search Movie</h3>
        <Link href={"/"}>TV Shows</Link>
        <Link href={"/"}>On Air</Link>
        <Link href={"/"}>Thodoris Kallioras</Link>
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='mb-2'>
          Delevoped by <span className='text-c-blue'>Thodoris Kallioras</span>
        </h3>
        <h2>Website - Portfolio</h2>
      </div>
    </footer>
  )
}

export default Footer

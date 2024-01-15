import Image from "next/image"

function Footer() {
  return (
    <footer className='flex'>
      <div>
        <h2>Footer component</h2>
        <Image
          src='/nowStreaming_icon.png'
          width={200}
          height={50}
          alt='now streaming website'
          quality={100}
        />
        <h2>West Attica</h2>
        <h2>Athens Greece</h2>
      </div>
      <div></div>
      <div></div>
    </footer>
  )
}

export default Footer

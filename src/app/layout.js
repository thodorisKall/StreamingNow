import Nav from "./(components)/Nav"
import Footer from "./(components)/Footer"

import "./globals.css"

export const metadata = {
  title: "Now Streaming Movies Website",
  description: "Created by Thodoris Kallioras",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-g-black'>
        <div className='px-4 lg:px-20'>
          <Nav />
          <main className='mb-4 '>{children}</main>
        </div>

        <Footer />
        <h3 className=' py-4 pl-4 lg:pl-20 font-semibold'>
          Developed By <a className='text-c-blue'>Thodoris Kallioras </a>&#169;
          2024
        </h3>
      </body>
    </html>
  )
}

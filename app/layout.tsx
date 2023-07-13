import Footer from '@/components/footer'
import './globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'
import Navbar from '@/components/navbar'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
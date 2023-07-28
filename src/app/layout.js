import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200','400','500','600','700','800','900'],
  display: 'swap'
})

export const metadata = {
  title: 'MovieFlix',
  description: 'This is the list of the movies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

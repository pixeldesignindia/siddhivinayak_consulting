import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import './fundRising/fund.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'D - Consult',
  description: 'D - Consult',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="/images/FavIcon.svg" type="image/svg" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

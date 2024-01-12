import { Inter } from 'next/font/google'
import { Calligraffitti } from 'next/font/google'
import { Trade_Winds } from 'next/font/google'
import './globals.css'
import Navibar from '@/components/NaviBar.jsx'




const inter = Inter({ subsets: ['latin'] })
const calligraffitti = Calligraffitti({ 
  weight: '400', subsets: ['latin'] })
  const tradeWinds = Trade_Winds({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={calligraffitti.className}>
     <Navibar/>
      {children}
      </body>
    </html>
  )
}


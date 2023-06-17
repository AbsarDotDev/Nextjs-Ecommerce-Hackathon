import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
const Poppins = localFont({
  src: './Poppins-Regular.ttf',
  display: 'swap',
  variable: '--font-poppins',

})
export const metadata = {
  title: 'Screwed Up Artist',
  description: 'Best Digital Product Selling Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

    <html lang="en" className={`${Poppins.variable}`}>

      <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />
</head>

      <body className={inter.className}> 
{children}    
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" async></script>

</body>
    </html>
    </ClerkProvider>


  )
}

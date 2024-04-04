import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import { Inter, Poppins } from 'next/font/google'
import '@/assets/css/globals.scss'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins(
  { 
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  },
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import Header from './Header'

export const metadata = {
  title: 'Spice_City',
  description: 'explore food from around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

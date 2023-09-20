import './globals.css'

export const metadata = {
  title: 'getlinked - Homepage',
  description: 'Created by Howard Otuya',
  theme: '#150E28'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

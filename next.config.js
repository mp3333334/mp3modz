import './globals.css'

export const metadata = {
  title: 'Profile Card',
  description: 'Personal profile card',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

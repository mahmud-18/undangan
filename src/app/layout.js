import './globals.css'

export const metadata = {
  title: 'The Wedding of Fahmi & Haifa',
  description: 'Dengan penuh rasa syukur dan bahagia, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari istimewa kami.',
  openGraph: {
    title: 'The Wedding of Fahmi & Haifa',
    description: 'Minggu, 24 Mei 2026',
    images: ['/images/cover.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
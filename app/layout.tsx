import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Woodward St Bakery Café | Freshly Baked, Locally Loved',
  description: 'House-made pastries, gourmet toasties, freshly baked bread, and hot coffee. Open 7 AM - 3 PM daily. Visit us at 216 Woodward St, Whitfield, QLD 4870.',
  keywords: ['bakery', 'café', 'Cairns', 'Whitfield', 'pastries', 'coffee', 'bread', 'catering', 'breakfast'],
  authors: [{ name: 'Woodward St Bakery Café' }],
  openGraph: {
    title: 'Woodward St Bakery Café | Freshly Baked, Locally Loved',
    description: 'House-made pastries, gourmet toasties, freshly baked bread, and hot coffee.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="bg-primary text-light">
        {children}
      </body>
    </html>
  )
}

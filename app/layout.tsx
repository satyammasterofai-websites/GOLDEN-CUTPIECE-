import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Golden Cut Piece Centre | Premium Fabrics in Saharanpur',
  description: 'Discover trendy cut pieces, ladies fabrics, dress materials, and stylish clothing collections at affordable prices at Golden Cut Piece Centre in Saharanpur.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

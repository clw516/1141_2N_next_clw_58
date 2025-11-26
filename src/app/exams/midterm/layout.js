import { Geist, Geist_Mono } from 'next/font/google';
//import "./globals.css";

import NavbarShop_58 from '@/components/midterm/NavbarShop_58';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'midterm p2_58',
  description: '1141 midterm P2',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarShop_58 />
        {children}
      </body>
    </html>
  );
}

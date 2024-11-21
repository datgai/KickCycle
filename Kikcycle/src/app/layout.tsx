import Providers from '@/components/Providers';
import './globals.css';
import { Mochiy_Pop_One, Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

export const metadata = {
  title: 'KikCycle',
  description: 'Next.js with NextAuth and Redux',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mochiy = Mochiy_Pop_One({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

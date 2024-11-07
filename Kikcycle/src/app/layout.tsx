"use client";

import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SessionProvider } from 'next-auth/react';

// export const metadata = {
//   title: 'My Next.js App',
//   description: 'Next.js with NextAuth and Redux',
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Provider store={store}>{children}</Provider>
        </SessionProvider>
      </body>
    </html>
  );
}

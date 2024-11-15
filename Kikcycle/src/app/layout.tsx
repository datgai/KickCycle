import Providers from '@/components/Providers';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'Next.js with NextAuth and Redux',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

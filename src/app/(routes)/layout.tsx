import type { Metadata } from 'next';
import '../globals.css';
import { Footer } from '../_components/Footer';
import { Header } from '../_components/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        <Footer />
      </body>
    </html>
  );
}

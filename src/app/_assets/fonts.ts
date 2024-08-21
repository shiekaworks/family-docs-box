import { Inter, Roboto_Mono, Poppins } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

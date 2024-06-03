import { Inter, Jua, Lato, Merriweather, Montserrat, Nunito, Open_Sans, Oswald, Poppins, Raleway, Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const roboto = Roboto({ subsets: ['latin'], weight: ['300'] });
export const lato = Lato({ subsets: ['latin'], weight: ['300'] });
export const oswald = Oswald({ subsets: ['latin'], weight: ['300'] });
export const montserrat = Montserrat({ subsets: ['latin'], weight: ['300'] });
export const openSans = Open_Sans({ subsets: ['latin'], weight: ['300'] });
export const raleway = Raleway({ subsets: ['latin'], weight: ['300'] });
export const poppins = Poppins({ subsets: ['latin'], weight: ['300'] });
export const nunito = Nunito({ subsets: ['latin'], weight: ['300'] });
export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300'],
});
export const jua = Jua({ subsets: ['latin'], weight: ['400'] });

export const fontFamiliesData = [
  inter.style.fontFamily,
  roboto.style.fontFamily,
  lato.style.fontFamily,
  oswald.style.fontFamily,
  montserrat.style.fontFamily,
  openSans.style.fontFamily,
  raleway.style.fontFamily,
  poppins.style.fontFamily,
  merriweather.style.fontFamily,
  jua.style.fontFamily,
];

export const fontFamiliesData1 = [inter, roboto, lato, oswald, montserrat, openSans, raleway, poppins, merriweather, jua];

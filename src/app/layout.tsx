'use client';

import type { Metadata } from 'next';
import './globals.css';
import { jua } from '@/data/fonts';
import { RecoilRoot } from 'recoil';

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        </head>
        <body className={jua.className}>{children}</body>
      </html>
    </RecoilRoot>
  );
}

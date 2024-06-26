'use client';

import './globals.css';
import { jua } from '@/data/fonts';
import Header from '@/layout/header/header';
import { RecoilRoot } from 'recoil';

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
        <Header />
        <body className={jua.className}>{children}</body>
        <footer />
      </html>
    </RecoilRoot>
  );
}

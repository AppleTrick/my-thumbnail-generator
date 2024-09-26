'use client';

import './globals.css';
import { jua } from '@/data/fonts';
import Header from '@/layout/header/Header';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body>
          <AppContainer>
            <Header />
            <Content>{children}</Content>
          </AppContainer>
        </body>
      </html>
    </RecoilRoot>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

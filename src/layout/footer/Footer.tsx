'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './footer.styles';

const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterSection>
          <S.FooterHeading>About Us</S.FooterHeading>
          <S.FooterText>We are a team of passionate developers.</S.FooterText>
        </S.FooterSection>
        <S.FooterSection>
          <S.FooterHeading>Quick Links</S.FooterHeading>
          <S.FooterList>
            <li>
              <Link href="/">
                <S.FooterLink>Home</S.FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <S.FooterLink>About</S.FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <S.FooterLink>Contact</S.FooterLink>
              </Link>
            </li>
          </S.FooterList>
        </S.FooterSection>
        <S.FooterSection>
          <S.FooterHeading>Follow Us</S.FooterHeading>
          <S.FooterList>
            <li>
              <S.FooterAnchor href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </S.FooterAnchor>
            </li>
            <li>
              <S.FooterAnchor href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </S.FooterAnchor>
            </li>
            <li>
              <S.FooterAnchor href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </S.FooterAnchor>
            </li>
          </S.FooterList>
        </S.FooterSection>
      </S.FooterContent>
      <S.FooterBottom>
        <S.FooterText>© 2024 Your Company. All rights reserved.</S.FooterText>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;

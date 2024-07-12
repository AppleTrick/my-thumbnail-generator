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
          <S.FooterHeading>About Me</S.FooterHeading>
          <S.FooterText>필요한걸 만드는 개발자 입니다</S.FooterText>
        </S.FooterSection>
        <S.FooterSection>
          <S.FooterHeading>Links</S.FooterHeading>
          <S.FooterList>
            <li>
              <Link href="/">
                <S.FooterLink>썸네일만들기</S.FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <S.FooterLink>프로젝트 소개</S.FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <S.FooterLink>문의하기</S.FooterLink>
              </Link>
            </li>
          </S.FooterList>
        </S.FooterSection>
        <S.FooterSection>
          <S.FooterHeading>Follow Us</S.FooterHeading>
          <S.FooterList>
            <li>
              <S.FooterAnchor href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                github
              </S.FooterAnchor>
            </li>
            {/* <li>
              <S.FooterAnchor href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </S.FooterAnchor>
            </li>
            <li>
              <S.FooterAnchor href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </S.FooterAnchor>
            </li> */}
          </S.FooterList>
        </S.FooterSection>
      </S.FooterContent>
      {/* <S.FooterBottom>
        <S.FooterText>© 2024 Your Company. All rights reserved.</S.FooterText>
      </S.FooterBottom> */}
    </S.FooterContainer>
  );
};

export default Footer;

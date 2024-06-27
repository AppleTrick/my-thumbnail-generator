'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './header.styles';
const Header: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 클라이언트 사이드에서만 렌더링되도록
  }

  return (
    <S.HeaderContainer>
      <S.Logo>
        <Link href="/" passHref>
          EasyToUse
        </Link>
      </S.Logo>
      <S.Nav>
        <S.NavList>
          <S.NavItem>
            <Link href="/thumbnailgenerator" passHref>
              썸네일만들기
            </Link>
          </S.NavItem>
          <S.NavItem>
            <Link href="/about" passHref>
              About
            </Link>
          </S.NavItem>
          <S.NavItem>
            <Link href="/contact" passHref>
              Contact
            </Link>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;

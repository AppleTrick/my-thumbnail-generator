'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 클라이언트 사이드에서만 렌더링되도록
  }

  return (
    <HeaderContainer>
      <Logo>
        <Link href="/" passHref>
          EasyToUse
        </Link>
      </Logo>
      <Nav>
        <NavList>
          <NavItem>
            <Link href="/thumbnailgenerator" passHref>
              썸네일만들기
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about" passHref>
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact" passHref>
              Contact
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 20px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Header;

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 10px;
`;

const FooterHeading = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 클라이언트 사이드에서만 렌더링되도록
  }

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>About Us</FooterHeading>
          <FooterText>We are a team of passionate developers.</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterList>
            <li>
              <Link href="/">
                <FooterLink>Home</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <FooterLink>About</FooterLink>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <FooterLink>Contact</FooterLink>
              </Link>
            </li>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
          <FooterList>
            <li>
              <FooterAnchor href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </FooterAnchor>
            </li>
            <li>
              <FooterAnchor href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </FooterAnchor>
            </li>
            <li>
              <FooterAnchor href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </FooterAnchor>
            </li>
          </FooterList>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterText>© 2024 Your Company. All rights reserved.</FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

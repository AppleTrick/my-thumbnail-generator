import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterSection = styled.div`
  flex: 1;
  padding: 10px;
`;

export const FooterHeading = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  font-size: 14px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;

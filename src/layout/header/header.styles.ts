import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 20px; /* 로고와 네비게이션 간의 여백 */
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-left: 20px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

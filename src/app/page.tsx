'use client';

// import MainPage from '@/components/Main/Main';
import SideBar from '@/components/SideBar/SideBar';
import ThumbnailEditor from '@/components/ThumbnailEditor/ThumbnailEditor';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 100vh; Viewport의 전체 높이를 사용 */
`;

const Home = () => {
  return (
    <Container>
      <ThumbnailEditor />
      <SideBar />
    </Container>
  );
};

export default Home;

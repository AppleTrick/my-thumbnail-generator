'use client';

import SideBar from '@/components/SideBar/SideBar';
import ThumbnailEditor from '@/components/ThumbnailEditor/ThumbnailEditor';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const thumbnailgenerator = () => {
  return (
    <Container>
      <ThumbnailEditor />
      <SideBar />
    </Container>
  );
};

export default thumbnailgenerator;

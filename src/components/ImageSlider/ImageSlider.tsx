import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 7));
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border: 2px solid #ccc;
  background-color: #fff;
`;

const ImageTrack = styled.div`
  display: flex;
  width: calc(300px * 14);
  animation: ${scroll} 20s linear infinite;
`;

const StyledImage = styled(Image)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`;

const ImageSlider = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = ref.current;
    if (track) {
      const images = track.querySelectorAll('img');
      images.forEach((image) => {
        track.appendChild(image.cloneNode(true));
      });
    }
  }, []);

  return (
    <ImageContainer>
      <ImageTrack ref={ref}>
        <StyledImage src="/imageSample/1.jpg" alt="Image 1" width={100} height={100} />
        <StyledImage src="/imageSample/2.jpg" alt="Image 2" width={100} height={100} />
        <StyledImage src="/imageSample/3.jpg" alt="Image 3" width={100} height={100} />
        <StyledImage src="/imageSample/4.jpg" alt="Image 4" width={100} height={100} />
        <StyledImage src="/imageSample/5.jpg" alt="Image 5" width={100} height={100} />
        <StyledImage src="/imageSample/6.jpg" alt="Image 6" width={100} height={100} />
        <StyledImage src="/imageSample/7.jpg" alt="Image 7" width={100} height={100} />
      </ImageTrack>
    </ImageContainer>
  );
};

export default ImageSlider;

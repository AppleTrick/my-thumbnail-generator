import ImageSlider from '../ImageSlider/ImageSlider';
import * as S from './main.styles';

const MainPage = () => {
  return (
    <div>
      <div>
        <ImageSlider />
      </div>
      <S.Container>
        <S.Section>
          <S.Heading>EasyToUse의 목표</S.Heading>
          <S.CriteriaContainer>
            <S.Criterion>
              <S.Checkmark>✔</S.Checkmark> 누구나 쉽게 사용할 수 있게하기
            </S.Criterion>
            <S.Criterion>
              <S.Checkmark>✔</S.Checkmark> 별도의 가입 없이 사용하기
            </S.Criterion>
            <S.Criterion>
              <S.Checkmark>✔</S.Checkmark> 인터넷에서 쉽게 사용하기
            </S.Criterion>
          </S.CriteriaContainer>
        </S.Section>
        <S.Section>
          {/* <S.Heading>헤더</S.Heading> */}
          <S.StepContainer>
            <S.Step>
              <S.StepNumber>EasyToUse의 첫번째 프로젝트</S.StepNumber>
              <S.StepDescription>
                썸네일 제작기
                <p>누구나 쉽게 썸네일을 제작할 수 있게 만들기</p>
              </S.StepDescription>
            </S.Step>
            <S.Step>
              <S.StepNumber>EasyToUse의 첫번째 프로젝트</S.StepNumber>
              <S.StepDescription>
                아이디어를 구상중
                <p>새로운 아이디어를 구상중입니다.</p>
              </S.StepDescription>
            </S.Step>
          </S.StepContainer>
        </S.Section>
      </S.Container>
      {/* <div>EasyToUse 누구나 쉽게 가입없이 웹 프로그램을 이용하는 사이트입니다.쉽고 빠르게 사용하는 것들을 소개합니다.</div>
      <div>EasyToUse의 첫번째 프로젝트</div>
      <div>프로젝트 자세히 보러가기</div>
      <div>EasyToUse의 두번째 프로젝트</div>
      <div>아이디어를 생각중입니다!!</div> */}
    </div>
  );
};

export default MainPage;

import React from "react";
import ChapterContainer from "../components/ChapterContainer.tsx";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <ChapterContainer>
      <Card>
        <CardTitle>Frontend Developer, Donghee!</CardTitle>
        <CardContent>
          <Selfie src="../img/selfie.gif" alt="미모티콘" />
          <Information>
            <InformationBox>
              <Icon src="../img/icon_name.png" alt="이름" />
              <Text>김동희 Donghee, Kim</Text>
            </InformationBox>
            <InformationBox>
              <Icon src="../img/icon_birthday.png" alt="생일" />
              <Text>2001. 10. 03</Text>
            </InformationBox>
            <InformationBox>
              <Icon src="../img/icon_home.png" alt="거주지" />
              <Text>부산광역시</Text>
            </InformationBox>
            <InformationBox>
              <Icon src="../img/icon_college.png" alt="학력" />
              <Text>동아대학교 컴퓨터공학과</Text>
            </InformationBox>
            <InformationBox>
              <Icon src="../img/icon_email.png" alt="이메일" />
              <Text>xldpsl1003@gmail.com</Text>
            </InformationBox>
            <LinkBox>
              <Link href="https://github.com/Dinogarlic">
                <Icon src="../img/icon_github.png" alt="깃허브" />
              </Link>
              <Link href="#">
                <Icon src="../img/icon_tistory.png" alt="티스토리" />
              </Link>
            </LinkBox>
          </Information>
        </CardContent>
      </Card>
    </ChapterContainer>
  );
};

export default About;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 60rem;
  max-width: 90%;
  height: 35rem;
  margin-top: 3rem;
  padding: 3rem;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem ${({ theme }) => theme.shadow};

  @media (max-width: 1024px) {
    width: 50rem;
  }

  @media (max-width: 768px) {
    width: max-content;
    max-width: 80%;
    height: auto;
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Selfie = styled.img`
  width: 20rem;
  height: 20rem;
  border: 0.1rem solid #ddd;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    margin: 1rem 0;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 5rem 0 8rem;

  @media (max-width: 1024px) {
    margin: 0 0 0 5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const InformationBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.9rem 0;

  @media (max-width: 480px) {
    margin: 0.6rem 0;
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.8rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  }
`;

const Text = styled.h3`
  display: inline-block;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const LinkBox = styled.div`
  margin: 0.8rem 0;
  display: flex;
`;

const Link = styled.a`
  display: inline-block;
`;

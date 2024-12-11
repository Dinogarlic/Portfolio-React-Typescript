import React from "react";
import ChapterContainer from "../components/ChapterContainer.tsx";
import styled, { keyframes } from "styled-components";

const Skill: React.FC = () => {
  return (
    <ChapterContainer>
      <Box>
        <SkillBox>
          <SkillTitle>Basic</SkillTitle>
          <SkillContent>
            <SkillNameAndLogo>
              <SkillName>HTML</SkillName>
              <SkillLogo src="../img/logo_html.png" alt="HTML 로고" />
            </SkillNameAndLogo>
            <SkillNameAndLogo>
              <SkillName>CSS</SkillName>
              <SkillLogo src="../img/logo_css.png" alt="CSS 로고" />
            </SkillNameAndLogo>
            <SkillNameAndLogo>
              <SkillName>JavaScript</SkillName>
              <SkillLogo src="../img/logo_js.png" alt="JavaScript 로고" />
            </SkillNameAndLogo>
            <SkillNameAndLogo>
              <SkillName>TypeScript</SkillName>
              <SkillLogo src="../img/logo_ts.png" alt="TypeScript 로고" />
            </SkillNameAndLogo>
          </SkillContent>
        </SkillBox>
        <SkillBox>
          <SkillTitle>Web</SkillTitle>
          <SkillContent>
            <SkillNameAndLogo>
              <SkillName>React</SkillName>
              <SkillLogo src="../img/logo_react.png" alt="React 로고" />
            </SkillNameAndLogo>
          </SkillContent>
        </SkillBox>
        <SkillBox>
          <SkillTitle>Mobile</SkillTitle>
          <SkillContent>
            <SkillNameAndLogo>
              <SkillName>React Native</SkillName>
              <SkillLogo src="../img/logo_react.png" alt="React Native 로고" />
            </SkillNameAndLogo>
          </SkillContent>
        </SkillBox>
        <SkillBox>
          <SkillTitle>VCS</SkillTitle>
          <SkillContent>
            <SkillNameAndLogo>
              <SkillName>Git</SkillName>
              <SkillLogo src="../img/logo_git.png" alt="Git 로고" />
            </SkillNameAndLogo>
            <SkillNameAndLogo>
              <SkillName>Github</SkillName>
              <SkillLogo src="../img/logo_github.png" alt="Github 로고" />
            </SkillNameAndLogo>
          </SkillContent>
        </SkillBox>
        <SkillBox>
          <SkillTitle>Tool</SkillTitle>
          <SkillContent>
            <SkillNameAndLogo>
              <SkillName>Figma</SkillName>
              <SkillLogo src="../img/logo_figma.png" alt="Figma 로고" />
            </SkillNameAndLogo>
            <SkillNameAndLogo>
              <SkillName>Slack</SkillName>
              <SkillLogo src="../img/logo_slack.png" alt="Slack 로고" />
            </SkillNameAndLogo>
            <SkillNameAndLogo>
              <SkillName>Notion</SkillName>
              <SkillLogo src="../img/logo_notion.png" alt="Notion 로고" />
            </SkillNameAndLogo>
          </SkillContent>
        </SkillBox>
      </Box>
    </ChapterContainer>
  );
};

export default Skill;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% {
    transform: translateY(0rem); 
  }
  50% { 
    transform: translateY(-0.5rem); 
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem 1rem;
  max-width: 70%;
  margin-top: 3rem;
  padding: 2.5rem 3rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0.2rem 0.3rem 0.1rem ${({ theme }) => theme.shadow};
  cursor: default;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: auto;
    gap: 0;
    width: 70%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 0;
    width: 70%;
  }
`;

const SkillBox = styled.div`
  margin: 1rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  &:nth-child(5) {
    grid-column: 2 / span 2;
  }

  // 각 SkillBox가 순서대로 애니메이션 시작하도록 지연 시간 추가
  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    align-items: center;
    text-align: center;

    &:nth-child(1) {
      grid-column: 1 / span 4;
    }
    &:nth-child(4) {
      grid-column: 3 / span 2;
    }
    &:nth-child(5) {
      grid-column: 1 / span 4;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    align-items: center;
    text-align: center;

    &:nth-child(1) {
      grid-column: 1 / span 2;
    }
    &:nth-child(4) {
      grid-column: 1 / span 2;
    }
    &:nth-child(5) {
      grid-column: 1 / span 2;
    }
  }
`;

const SkillTitle = styled.h2`
  margin: 1rem;

  @media (max-width: 480px) {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const SkillContent = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const SkillNameAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${pulse} 2s infinite;
  }
`;

const SkillName = styled.p`
  font-size: 1.1rem;

  @media (max-width: 480px) {
    margin: 1rem 0 0.5rem 0;
    font-size: 1rem;
  }
`;

const SkillLogo = styled.img`
  width: 4em;
  height: 4rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
  }
`;

import React from "react";
import ChapterContainer from "../components/ChapterContainer.tsx";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const Hello: React.FC = () => {
  return (
    <ChapterContainer>
      <Introduction>
        <Typewriter
          words={["안녕하세요!👋\n주니어 프론트엔드 개발자 김동희입니다."]}
          loop={100} // 반복 횟수 (1로 설정하면 한 번만 실행)
          cursor
          cursorStyle="|"
          typeSpeed={50} // 타이핑 속도
          deleteSpeed={50} // 삭제 속도
          delaySpeed={1000} // 다음 문장으로 넘어가는 대기 시간
        />
      </Introduction>
    </ChapterContainer>
  );
};

export default Hello;

const Introduction = styled.h2`
  display: inline-block;
  max-width: 70%;
  color: ${({ theme }) => theme.text};
  font-family: "LeeSeoyun", sans-serif;
  font-size: 2.5rem;
  font-weight: normal;
  text-align: center;
  line-height: 1.2;
  word-break: keep-all;
`;

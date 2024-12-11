import React, { ReactNode } from "react";
import styled from "styled-components";

interface ChapterContainerProps {
  children: ReactNode;
}

const ChapterContainer: React.FC<ChapterContainerProps> = ({ children }) => {
  return <StyledChapterContainer>{children}</StyledChapterContainer>;
};

export default ChapterContainer;

const StyledChapterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

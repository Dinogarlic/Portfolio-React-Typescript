import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { darkModeState } from "../theme.tsx";

interface HeaderProps {
  children: React.ReactNode;
  onToggleDarkMode: () => void; // onToggleDarkMode 추가
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  children,
  onToggleDarkMode,
  onClick,
}) => {
  const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(darkModeState);

  // Dark mode 토글 함수
  const toggleDarkMode = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 컴포넌트의 onClick 이벤트 전파 방지
    setIsDarkMode((prevMode) => !prevMode); // Dark mode 상태 업데이트
    onToggleDarkMode(); // 부모 컴포넌트의 onToggleDarkMode 호출
  };

  return (
    <StyledHeader onClick={onClick}>
      <HeaderText>{`< ${children} >`}</HeaderText>
      <ToggleButton onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </ToggleButton>
    </StyledHeader>
  );
};

export default Header;

// StyledHeader에서 isDarkMode를 사용해서 스타일을 적용
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  // Dark mode 스타일을 적용
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const HeaderText = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const ToggleButton = styled.button`
  padding: 0.3rem 0.6rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.shadow};
  }
`;

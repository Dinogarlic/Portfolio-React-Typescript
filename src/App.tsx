import React, { useState, useEffect, useRef, Suspense } from "react";
import { useRecoilState } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { darkModeState } from "./theme.tsx";
import color from "./color";
import Header from "./components/Header.tsx";

const Hello = React.lazy(() => import("./chapter/Hello.tsx"));
const About = React.lazy(() => import("./chapter/About.tsx"));
const Skill = React.lazy(() => import("./chapter/Skill.tsx"));
const Portfolio = React.lazy(() => import("./chapter/Portfolio.tsx"));
const Contact = React.lazy(() => import("./chapter/Contact.tsx"));

type ChapterName = "Hello" | "About" | "Skill" | "Portfolio" | "Contact";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [chapter, setChapter] = useState<ChapterName>("Hello");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // chapterRefs 객체를 useMemo 없이 직접 초기화
  const chapterRefs = {
    Hello: useRef<HTMLDivElement>(null),
    About: useRef<HTMLDivElement>(null),
    Skill: useRef<HTMLDivElement>(null),
    Portfolio: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const focusedElement = document.activeElement as HTMLElement | null;
        if (focusedElement && focusedElement.dataset.section) {
          const chapter = focusedElement.dataset.section as ChapterName;
          chapterRefs[chapter]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chapterRefs]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setChapter(entry.target.id as ChapterName);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(chapterRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [chapterRefs]);

  const scrollToChapter = () => {
    const currentRef = chapterRefs[chapter].current;
    if (currentRef) {
      currentRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider theme={darkMode ? color.dark : color.light}>
      <PageContainer>
        <Header onToggleDarkMode={toggleDarkMode} onClick={scrollToChapter}>
          {chapter}
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <ChapterContainer
            ref={chapterRefs.Hello}
            id="Hello"
            tabIndex={0}
            data-section="Hello"
          >
            <Hello />
          </ChapterContainer>
          <ChapterContainer
            ref={chapterRefs.About}
            id="About"
            tabIndex={0}
            data-section="About"
          >
            <About />
          </ChapterContainer>
          <ChapterContainer
            ref={chapterRefs.Skill}
            id="Skill"
            tabIndex={0}
            data-section="Skill"
          >
            <Skill />
          </ChapterContainer>
          <ChapterContainer
            ref={chapterRefs.Portfolio}
            id="Portfolio"
            tabIndex={0}
            data-section="Portfolio"
          >
            <Portfolio />
          </ChapterContainer>
          <ChapterContainer
            ref={chapterRefs.Contact}
            id="Contact"
            tabIndex={0}
            data-section="Contact"
          >
            <Contact />
          </ChapterContainer>
        </Suspense>
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ theme }) => theme.background};
`;

const ChapterContainer = styled.div`
  width: 100%;
  &:focus {
    outline: none;
  }
`;

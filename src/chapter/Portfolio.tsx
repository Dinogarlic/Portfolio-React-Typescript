import React, { useState, useEffect, useRef } from "react";
import ChapterContainer from "../components/ChapterContainer.tsx";
import styled from "styled-components";
import color from "../color";

// 프로젝트 데이터의 타입 정의
interface ProjectType {
  title: string;
  duration: string;
  introduction: string;
  explanation: string;
  role: string;
  tech: string[];
  contribution: string;
  github: string;
  images: string[];
}

const projects: ProjectType[] = [
  {
    title: "HUMAIND: 인공지능 윤리 평가 시스템",
    duration: "2024. 09 ~ 2024. 11 (4人)",
    introduction: "내가 사용하는 인공지능이 과연 윤리적일까?",
    explanation: `인공지능의 발전과 함께 인공지능이 윤리적인지에 대해서 많은 의구심이 들고 있습니다.`,
    role: "Web Design & FE",
    tech: ["React"],
    contribution: "45%",
    github: "https://github.com/patisiel-study/ELSA-frontend",
    images: [
      "HUMAIND_main.png",
      "HUMAIND_info.png",
      "HUMAIND_testHub.png",
      "HUMAIND_test.png",
    ],
  },
  {
    title: "내 케이크를 꾸며줘!",
    duration: "2024. 03 ~ 2024. 06 (4人)",
    introduction: "특별한 생일 편지를 보내줄 수는 없을까?",
    explanation: `생일을 조금 더 뜻깊게 보내고 싶다는 마음에서 시작한 프로젝트입니다.
    생일이 한달 남은 친구가 케이크 모양의 편지함을 만들면,
    친구가 케이크에 귀여운 촛불 모양의 편지를 작성할 수 있습니다.`,
    role: "Web Design & FE",
    tech: ["React"],
    contribution: "25%",
    github: "https://github.com/patisiel-study/decorate-my-cake-frontend",
    images: [
      "DecorateMyCake_main.png",
      "DecorateMyCake_selectCake.png",
      "DecorateMyCake_setCake.png",
    ],
  },
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imageIndexes, setImageIndexes] = useState<number[]>(
    projects.map(() => 0) // 각 프로젝트에 대해 이미지 인덱스를 초기화
  );
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (boxRef.current && boxRef.current.contains(e.target as Node)) {
        e.preventDefault();
        if (e.deltaY > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        } else {
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
          );
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index, projectIndex) => {
          const projectImages = projects[projectIndex].images;
          return (index + 1) % projectImages.length;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (
    projectIndex: number,
    direction: "prev" | "next"
  ) => {
    setImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const projectImages = projects[projectIndex].images;
      const currentImageIndex = newIndexes[projectIndex];

      if (direction === "prev") {
        newIndexes[projectIndex] =
          (currentImageIndex - 1 + projectImages.length) % projectImages.length;
      } else if (direction === "next") {
        newIndexes[projectIndex] =
          (currentImageIndex + 1) % projectImages.length;
      }

      return newIndexes;
    });
  };

  return (
    <ChapterContainer>
      <Box ref={boxRef}>
        <Pagination>
          {projects.map((_, index) => (
            <PagingButton
              key={index}
              $isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Pagination>
        <SliderContainer>
          <SliderWrapper
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, projectIndex) => (
              <Project key={projectIndex}>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDuration>{project.duration}</ProjectDuration>
                  <ProjectIntroduction>
                    {project.introduction}
                  </ProjectIntroduction>
                  <ProjectExplanation>
                    {project.explanation}
                    <br />
                    <br />
                    <br /># 프로젝트 내 역할 : {project.role}
                    <br /># 프로젝트 사용 기술 :{" "}
                    {project.tech.map((tech, index) => (
                      <Tag key={index}>{tech}</Tag>
                    ))}
                    <br /># 프로젝트 기여도 : {project.contribution}
                  </ProjectExplanation>
                  <GithubLink href={project.github} target="_blank">
                    Github↗
                  </GithubLink>
                </ProjectContent>
                <ProjectImgContainer>
                  <Icon
                    src={`${process.env.PUBLIC_URL}/img/next.png`}
                    alt="이전"
                    onClick={() => handleImageChange(projectIndex, "prev")}
                  />
                  <ProjectImg
                    src={`${process.env.PUBLIC_URL}/img/${
                      project.images[imageIndexes[projectIndex]]
                    }`}
                    alt="프로젝트 이미지"
                  />
                  <Icon
                    src={`${process.env.PUBLIC_URL}/img/next.png`}
                    alt="다음"
                    onClick={() => handleImageChange(projectIndex, "next")}
                  />
                </ProjectImgContainer>
              </Project>
            ))}
          </SliderWrapper>
        </SliderContainer>
      </Box>
    </ChapterContainer>
  );
};

export default Portfolio;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40rem;
  width: 70%;
  margin-top: 3rem;
  padding: 3rem 3rem 3rem 4rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0.2rem 0.3rem 0.1rem ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
    padding: 2rem;
    box-sizing: border-box;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
`;

const PagingButton = styled.div<{ $isActive: boolean }>`
  width: 1rem;
  height: 1rem;
  background-color: ${({ $isActive }) =>
    $isActive ? "#7CAEFF" : color.light.header};
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 0.8rem;
    height: 0.8rem;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 0.1rem;
`;

const ProjectDuration = styled.p`
  margin: 0;
  color: ${color.light.shadow};
`;

const ProjectIntroduction = styled.h3`
  margin-top: 2rem;
`;

const ProjectExplanation = styled.p`
  margin: 0;
`;

const Tag = styled.span`
  margin-right: 0.5rem;
  padding: 0.1rem 0.5rem;
  background-color: #61dafb;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`;

const GithubLink = styled.a`
  margin-top: 1rem;
  color: ${color.light.shadow};
  text-decoration: underline ${color.light.shadow};
`;

const ProjectImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const ProjectImg = styled.img`
  width: 25rem;
  height: 25rem;
  margin: 1rem;
  background-color: ${color.light.background};
  border-radius: 20%;

  @media (max-width: 1024px) {
    width: 70%;
    height: auto;
    border-radius: 10%;
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:first-child {
    transform: scaleX(-1);
  }

  @media (max-width: 1024px) {
    width: 1rem;
    height: 1rem;
  }
`;

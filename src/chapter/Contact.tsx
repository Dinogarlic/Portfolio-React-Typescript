import React, { useState, useRef } from "react";
import ChapterContainer from "../components/ChapterContainer.tsx";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_nd2413g", // EmailJS Service ID
        "template_nd2413g", // EmailJS Template ID
        form.current,
        "buxVdZ7sf25BA4crZ" // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("메일을 성공적으로 보냈습니다!");
        },
        (error) => {
          console.log(error.text);
          setStatus("메일을 보낼 수 없습니다. 잠시 후 다시 시도해주세요.");
        }
      );
  };

  return (
    <ChapterContainer>
      <Postcard>
        <PostcardInformation>
          <Title>Contact</Title>
          <Explanation>
            제 이메일로 바로 전송되는
            <br />
            컨택 메일 작성란입니다.
          </Explanation>
        </PostcardInformation>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>
            보내는 이
            <Input
              type="text"
              name="from_name"
              placeholder="성함을 입력해 주세요."
              required
            />
          </Label>
          <Label>
            회신 이메일 주소
            <Input
              type="email"
              name="reply_to"
              placeholder="example@gmail.com"
              required
            />
          </Label>
          <Label>
            내용
            <Textarea
              name="message"
              rows={8}
              placeholder="내용을 입력해 주세요."
              required
            />
          </Label>
          <Button type="submit">메일 보내기</Button>
          {status && <Status>{status}</Status>}
        </Form>
      </Postcard>
    </ChapterContainer>
  );
};

export default Contact;

const Postcard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 36rem;
  margin-top: 3rem;
  background-color: white;
  box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem ${({ theme }) => theme.shadow};
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const PostcardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 30rem;
  padding-right: 5%;
  border-right: 0.1rem solid #ddd;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 0.1rem solid #ddd;
    padding-right: 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Explanation = styled.i`
  margin-bottom: 2rem;
  display: inline-block;
  font-size: 0.8rem;
  color: gray;

  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    margin-bottom: 0.8rem;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 1024px) {
    padding: 0.4rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;

  @media (max-width: 1024px) {
    padding: 0.4rem;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem;
  }
`;

const Status = styled.p`
  margin-top: 1rem;
  color: green;
  font-weight: bold;

  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

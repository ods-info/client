import styled from "styled-components";
import { uuid } from "uuidv4";
import { Flex, Space, Text } from "~/@components/atoms";
import { Question } from "~/@components/molecules";

const question_data = [
  {
    question: "미네랄이 많을수록 좋은 생수인가요?",
    view: 300,
    reply: 32,
    src: "./ongdal.svg",
  },
  {
    question: "생수 다들 뭐드세요?",
    view: 300,
    reply: 32,
    src: "./ongdal.svg",
  },
  {
    question: "수질 위반 업체는 어디서 알아볼 수 있나요?",
    view: 300,
    reply: 32,
    src: "./ongdal.svg",
  },
  {
    question: "수질 위반 업체는 어디서 알아볼 수 있나요?",
    view: 300,
    reply: 32,
    src: "./ongdal.svg",
  },
  {
    question: "수질 위반 업체는 어디서 알아볼 수 있나요?",
    view: 300,
    reply: 32,
    src: "./ongdal.svg",
  },
];

export const Main_5 = () => {
  return (
    <Main_5_Container>
      <Flex direction="column" align="start">
        <Text text={"옹달샘 Q&AS"} font="Spoqa" weight={500} size={17} />
        <Text text={"옹달샘이 직접 답해드립니다"} font="Spoqa" weight={300} size={14} color="rgba(0, 0, 0, 0.5)" />
      </Flex>
      <Space height="16px" />
      <Flex align="start" gap={12}>
        {question_data.map((el) => (
          <Question key={uuid()} {...el} />
        ))}
      </Flex>
    </Main_5_Container>
  );
};

const Main_5_Container = styled.div`
  width: 100%;
  background: rgba(182, 184, 187, 0.3);
  padding: 16px;
`;

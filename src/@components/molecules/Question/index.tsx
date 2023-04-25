import Image from "next/image";
import styled from "styled-components";
import { Flex, Text } from "~/@components/atoms";
import { QuestionProps } from "~/@interfaces/Question";

export const Question = ({ question, view, reply, src }: QuestionProps) => {
  return (
    <QuestionContainer src={"./question.svg"}>
      <Flex direction="row" justify="space-between">
        <Flex align="start" gap={7}>
          <Text text={question} weight={500} size={14} font="Spoqa" />
          <Flex direction="row" justify="start" gap={4}>
            <Text text={`조회수 ${view}`} weight={500} size={14} font="Spoqa" color="#4EAAFF" />
            <Text text={"I"} weight={500} size={14} font="Spoqa" color="rgba(0, 0, 0, 0.3)" />
            <Text text={`답변 ${reply}`} weight={500} size={14} font="Spoqa" color="#4EAAFF" />
          </Flex>
        </Flex>
        <Image src={src} alt="profile" width={40} height={40} />
      </Flex>
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div<{ src: string }>`
  background: ${({ src }) => `url(${src})`};
  width: 100%;
  padding: 12px 9px 6px 38px;
`;

import styled from "styled-components";
import { uuid } from "uuidv4";
import { Flex, Space, Text } from "~/@components/atoms";
import { KnowCardProps } from "~/@interfaces";
import { Button } from "../Button";

export const KnowCard = ({ text, src, label, bgColor = "" }: KnowCardProps) => {
  console.log(bgColor);
  return (
    <KnowCardContainer src={src} bgColor={bgColor}>
      {label ? (
        <>
          <Button padding="2px 9px" borderRadius="30px" border="1px solid white">
            <Text text={label} size={15} weight={500} font="Spoqa" color="white" />
          </Button>
          <Space height="16px" />
        </>
      ) : (
        ""
      )}
      <Flex align="start">
        {text.map((el) => (
          <Text key={uuid()} text={el} size={12} weight={500} font="Spoqa" color="white" height={130} />
        ))}
      </Flex>
    </KnowCardContainer>
  );
};

const KnowCardContainer = styled.div<{ src: string; bgColor?: string }>`
  background: ${({ src, bgColor }) => `${bgColor ? bgColor + "," : ""} url("${src}")`};
  padding: 16px;
  width: 175px;
  border-radius: 20px;
  height: 208px;
`;

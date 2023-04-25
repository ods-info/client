import styled from "styled-components";
import { Flex } from "~/@components/atoms/Flex";
import { Space } from "~/@components/atoms/Space";
import { Text } from "~/@components/atoms/Text";
import { Button } from "~/@components/molecules/Button";

export const Main_1 = () => {
  const curDate = new Date().toISOString().slice(2, 10).replaceAll("-", ".");

  return (
    <Main_1_Container src="./deprecated.svg">
      <Flex align="start">
        <Flex direction="row" justify="start">
          <Text font="Spoqa" weight={500} size={17} text={curDate} color="white" />
          &nbsp;
          <Text font="Spoqa" weight={300} size={17} text={"기준 수질 부적합 생수"} color="white" />
        </Flex>
        <Flex direction="row" justify="start" gap={8}>
          <Text font="Spoqa" weight={500} size={60} text={1} color="white" />
          <Flex align="start">
            <Space margin="15px" />
            <Text font="Spoqa" weight={300} size={17} text={"건 있습니다"} color="white" />
          </Flex>
        </Flex>
        <Space margin="10px" />
        <Button padding="8px 24px 6px 24px" background="white">
          <Text font="Spoqa" size={17} color="#4EAAFF" weight={500} text={"더 알아보기"} />
        </Button>
      </Flex>
    </Main_1_Container>
  );
};

const Main_1_Container = styled.div<{ src?: string }>`
  width: 100%;
  padding: 22px;
  border-radius: 30px;
  background: ${({ src }) => `linear-gradient(
    121.86deg,
    #4eaaff 36.81%,
    rgba(78, 170, 255, 0.582677) 68.44%,
    rgba(78, 170, 255, 0) 91.1%
  ), url(${src})`};
`;

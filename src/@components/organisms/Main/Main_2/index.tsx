import styled from "styled-components";
import { uuid } from "uuidv4";
import { Flex, Space, Text } from "~/@components/atoms";
import { Button } from "~/@components/molecules/Button";
import { PaddingLayout } from "~/@components/templates/PaddingLayout";

const tag_data = ["환경친화적", "청정암반수", "자체제작용기", "매월수질검사"];

const WaterTags = () => {
  return (
    <Flex justify="start" direction="row" gap={7}>
      {tag_data.map((el) => (
        <Button key={uuid()} padding={"5px 10px"} background="rgba(0, 0, 0, 0.3)">
          <Text text={el} font="Spoqa" color="white" size={12} weight={300} />
        </Button>
      ))}
    </Flex>
  );
};

export const Main_2 = () => {
  return (
    <Flex direction="column" align="start">
      <PaddingLayout>
        <Flex direction="column" align="start">
          <Text text={"오늘의 생수"} font="Spoqa" weight={500} size={17} />
          <Text text={"옹달샘이 추천해드려요"} font="Spoqa" weight={300} size={14} color="rgba(0, 0, 0, 0.5)" />
        </Flex>
      </PaddingLayout>
      <Space height="16px" />
      <Main_2_Container src="./nice_water_banner.svg">
        <Flex direction="column" align="start">
          <Text text={"플라스틱이 아닌 생수"} font="Spoqa" weight={500} size={17} color="rgba(255, 255, 255, 0.7)" />
          <Text text={"보신 적 있으신가요?"} font="Spoqa" weight={500} size={17} color="rgba(255, 255, 255, 0.7)" />
        </Flex>
        <Space height="30px" />
        <Flex direction="column" align="start">
          <Text text={"Nice Water"} font="Spoqa" weight={500} size={22} color="white" />
          <Text text={"Nice Weather"} font="Spoqa" weight={300} size={14} color="rgba(255, 255, 255, 0.6)" />
        </Flex>
        <Space height="42px" />
        <WaterTags />
      </Main_2_Container>
    </Flex>
  );
};

const Main_2_Container = styled.div<{ src: string }>`
  width: 100%;
  padding: 20px;
  background: ${({ src }) => `url(${src})`};
`;

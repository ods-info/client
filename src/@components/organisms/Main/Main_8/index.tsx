import Image from "next/image";
import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";

export const Main_8 = () => {
  return (
    <Main_8_Container>
      <Flex align="center">
        <Flex direction="column" align="center">
          <Text text={"인스타그램"} font="Spoqa" weight={500} size={17} />
          <Text
            text={"옹달샘의 더 많은 컨텐츠들은 여기에"}
            font="Spoqa"
            weight={300}
            size={14}
            color="rgba(0, 0, 0, 0.5)"
          />
        </Flex>
        <Space height="30px" />
        <Image src={"./insta_1.svg"} alt="instagram" width={305} height={305} />
      </Flex>
    </Main_8_Container>
  );
};

const Main_8_Container = styled.div`
  box-shadow: 0px -10px 30px 4px rgba(37, 37, 37, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: white;
  padding: 32px;
  border-radius: 32px 32px 0px 0px;
`;

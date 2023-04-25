import Image from "next/image";
import styled from "styled-components";
import { uuid } from "uuidv4";
import { Flex, Space, Text } from "~/@components/atoms";
import { AutoImage } from "~/@components/molecules/AutoImage";
import { Button } from "~/@components/molecules/Button";

const water_data = [
  {
    src: "/dongwon.svg",
    name: "동원샘물",
    company: "동원F&B",
  },
  {
    src: "/samda.svg",
    name: "삼다수",
    company: "제주개발공사",
  },
  {
    src: "/evian.svg",
    name: "에비앙",
    company: "롯데칠성음료",
  },
  {
    src: "/seoksu.svg",
    name: "석수",
    company: "하이트진로",
  },
  {
    src: "/pulmuwon.svg",
    name: "풀무원샘물",
    company: "풀무웜",
  },
  {
    src: "/pyeong.svg",
    name: "평창수",
    company: "해태htb",
  },
];

const WaterCard = () => {
  return (
    <WaterCardContainer>
      <Flex direction="row" wrap="wrap" justify="space-between" gap={10}>
        {water_data.map((el) => (
          <Flex key={uuid()} width="31%">
            <AutoImage src={el.src} alt={el.name} />
            <Space height="3px" />
            <Flex align="start">
              <Text font="Spoqa" weight={500} size={14} text={el.name} />
              <Text font="Spoqa" weight={500} size={12} text={el.name} color="rgba(0,0,0,0.6)" />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </WaterCardContainer>
  );
};

const WaterCardContainer = styled.div`
  padding: 16px 0px;
  width: 100%;
`;

export const Main_3 = () => {
  return (
    <Flex align="start">
      <Flex direction="column" align="start">
        <Text text={"생수 정보 리스트"} font="Spoqa" weight={500} size={17} />
        <Text text={"다양한 생수 정보를 제공해드려요"} font="Spoqa" weight={300} size={14} color="rgba(0, 0, 0, 0.5)" />
      </Flex>
      <WaterCard />
      <Space height="20px" />
      <Button
        width="100%"
        border="1px solid rgba(78, 170, 255, 0.7)"
        padding="14px 16px"
        borderRadius="30px"
        background="rgba(78, 170, 255, 0.3)"
      >
        <Flex justify="center" direction="row" gap={3}>
          <Text text={"전체 목록 보러가기"} font="Spoqa" weight={500} size={14} color="black" />
          <Image src={"./icon_right_blue.svg"} alt="icon" width={24} height={24} />
        </Flex>
      </Button>
    </Flex>
  );
};

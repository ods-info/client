import { uuid } from "uuidv4";
import { Flex, Space, Text } from "~/@components/atoms";
import { KnowCard } from "~/@components/molecules";

const know_data = [
  {
    src: "./nice_water_card.svg",
    text: ["옹달샘의", "필수 생수 상식", "일번 카드"],
    label: "new",
    bgColor: "linear-gradient(180deg, #4EAAFF 55.21%, rgba(78, 170, 255, 0.754545) 76.04%, rgba(78, 170, 255, 0) 100%)",
  },
  {
    src: "./nice_water_card.svg",
    text: ["알고 계셨나요?"],
    bgColor:
      "linear-gradient(180deg, #B1DAFF 55.21%, rgba(177, 218, 255, 0.754545) 76.04%, rgba(177, 218, 255, 0) 100%)",
  },
  {
    src: "./nice_water_card.svg",
    text: ["옹달샘의", "필수 생수 상식", "이번 카드"],
    label: "new",
    bgColor:
      "linear-gradient(180deg, #B1C6DA 55.21%, rgba(177, 198, 218, 0.754545) 76.04%, rgba(177, 198, 218, 0) 100%)",
  },
];

export const Main_4 = () => {
  return (
    <Flex align="start">
      <Flex direction="column" align="start">
        <Text text={"필수 생수 상식"} font="Spoqa" weight={500} size={17} />
        <Text text={"옹달샘이 알려드려요"} font="Spoqa" weight={300} size={14} color="rgba(0, 0, 0, 0.5)" />
      </Flex>
      <Space height="16px" />
      <Flex direction="row" justify="start" overflow="auto hidden">
        <Flex direction="row" justify="start" gap={7} width="auto">
          {know_data.map((el) => (
            <KnowCard key={uuid()} text={el.text} src={el.src} label={el.label} bgColor={el?.bgColor} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

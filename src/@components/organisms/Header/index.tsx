import Image from "next/image";
import styled from "styled-components";
import { Flex } from "~/@components/atoms/Flex";

export const Header = () => {
  return (
    <StyledHeader>
      <Flex direction="row" justify="space-between">
        <Image src={"/ods_logo.svg"} alt={"logo"} width={92} height={42.86} />
        <Flex direction="row" gap={15} width="auto">
          <Image src={"/search.svg"} alt={"logo"} width={30} height={30} />
          <Image src={"/notify.svg"} alt={"logo"} width={30} height={30} />
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 16px;
`;

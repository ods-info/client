import styled from "styled-components";
import { Footer, Header } from "~/@components/organisms";
import { LayoutProp } from "~/@interfaces";

export const Applayout = ({ children }: LayoutProp) => {
  return (
    <ApplayoutContainer>
      <Header />
      {children}
      <Footer />
    </ApplayoutContainer>
  );
};

const ApplayoutContainer = styled.main`
  max-width: 430px;
  min-width: 390px;
  margin: 0 auto;
`;

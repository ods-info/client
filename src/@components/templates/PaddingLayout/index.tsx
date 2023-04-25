import styled from "styled-components";
import { LayoutProp } from "~/@interfaces";

export const PaddingLayout = ({ children }: LayoutProp) => {
  return <PaddingContainer>{children}</PaddingContainer>;
};

const PaddingContainer = styled.div`
  padding: 0px 16px;
  width: 100%;
`;

import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { FontWeight } from "~/@interfaces";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  textColor?: string;
  textSize?: number;
  border?: string;
  background?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  cursor?: string;
  width?: string;
  height?: string;
  align?: string;
  weight?: FontWeight;
}

export const Button = ({
  children,
  textSize = 16,
  textColor = "White",
  text,
  border = "none",
  background = `none`,
  borderRadius = "16px",
  shadow,
  padding = "1em",
  cursor = "auto",
  width,
  height,
  weight,
  align = "center",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      cursor={cursor}
      border={border}
      background={background}
      borderRadius={borderRadius}
      shadow={shadow}
      padding={padding}
      width={width}
      height={height}
      align={align}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  textColor?: string;
  textSize?: number;
  border?: string;
  background?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  width?: string;
  height?: string;
  cursor?: string;
  align?: string;
}>`
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize};
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadow }) => shadow};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
`;

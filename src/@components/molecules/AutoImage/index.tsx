import Image from "next/image";
import styled from "styled-components";

export const AutoImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <AutoImageContainer>
      <Image src={src} alt={alt} fill className="autoImage" />
    </AutoImageContainer>
  );
};

const AutoImageContainer = styled.div`
  & .autoImage {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;

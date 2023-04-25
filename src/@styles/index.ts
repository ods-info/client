import { css } from "styled-components";

export const commonStyle = css`
  body {
    * {
      box-sizing: border-box;
      -ms-overflow-style: none; /* 인터넷 익스플로러 */
      scrollbar-width: none; /* 파이어폭스 */
      &::-webkit-scrollbar {
        display: none; /* 크롬, 사파리, 오페라, 엣지 */
      }
    }
  }
`;

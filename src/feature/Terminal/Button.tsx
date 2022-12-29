import styled from "styled-components";

type Props = { color: "red" | "yellow" | "green" };

export const Button = styled.div<Props>`
  border-radius: 50%;
  height: 0.75em;
  width: 0.75em;
  background-color: ${(p) => bgColorMap[p.color]};
`;

const bgColorMap = {
  red: "#ff5f56",
  yellow: "#ffbd2e",
  green: "#27c93f",
};

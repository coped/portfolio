import styled from "styled-components";

type Props = { size: "body" | "largeBody" };
export const Copy = styled.p<Props>`
  font-size: ${(p) => sizeMap[p.size]};
  font-weight: lighter;
  color: #454545;
  padding: 0.4em 0;
`;

const sizeMap = {
  body: "1.5em",
  largeBody: "2.25em",
};

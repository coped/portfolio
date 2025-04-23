import { ReactElement } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Flicker } from "../../components/Flicker/Flicker";
import { useBrowser } from "../../hooks/useBrowser/useBrowser";

export function Output(): ReactElement {
  const { asPath: path } = useRouter();
  const browser = useBrowser();

  return (
    <Monospace>
      <Color color="green">
        <Strong>guest@{browser}</Strong>
      </Color>
      :<Color color="purple">~{path}</Color>$ ./cope.sh
      <Flicker interval={600}>_</Flicker>
    </Monospace>
  );
}

const Monospace = styled.p`
  font-family: monospace;
`;

const Strong = styled.span`
  font-weight: bold;
`;

type ColorProps = { color: "green" | "purple" };
const Color = styled.span<ColorProps>`
  color: ${(p) => colorMap[p.color]};
`;
const colorMap = { green: "#50fa7b", purple: "#bd93f9" };

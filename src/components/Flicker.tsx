import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useToggler } from "../hooks/useToggler";

export type Props = { children: ReactNode; interval: number };

export function Flicker({ children, interval }: Props): ReactElement {
  const [flicker, toggleFlicker] = useToggler(true);

  useEffect(() => {
    const id = window.setInterval(toggleFlicker, interval);
    return () => window.clearInterval(id);
  }, [toggleFlicker, interval]);

  return <StyledSpan isTransparent={flicker}>{children}</StyledSpan>;
}

export type StyledSpanProps = { isTransparent: boolean };
export const StyledSpan = styled.span<StyledSpanProps>`
  opacity: ${(props) => (props.isTransparent ? 0 : "initial")};
`;

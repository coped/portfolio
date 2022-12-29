import type { ReactElement } from "react";
import styled from "styled-components";
import { SocialLink } from "./SocialLink";
import github from "public/images/github.svg";
import linkedin from "public/images/linkedin.png";

export function SocialLinks(): ReactElement {
  return (
    <Container>
      <SocialLink
        icon={github}
        href="https://github.com/coped"
        alt="Github icon"
        dimensions={{ width: 70, height: 70 }}
      />
      <SocialLink
        icon={linkedin}
        href="https://www.linkedin.com/in/dennis-cope/"
        alt="LinkedIn icon"
        dimensions={{ width: 82, height: 70 }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2em;
`;

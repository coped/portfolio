import type { ReactElement } from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HomeBanner } from "../src/feature/HomeBanner";
import { SocialLinks } from "../src/feature/SocialLinks";
import { Copy } from "../src/components/Copy";
import { VerticalDivider } from "../src/components/VerticalDivider";
import { HideOnSmallScreens } from "../src/components/HideOnSmallScreens";
import { SMALL_SCREEN_MAX_WIDTH } from "../src/lib/constants";

export default function Home(): ReactElement {
  return (
    <StyledHome>
      <Head>
        <title>Dennis Cope | cope.sh</title>
      </Head>
      <HomeBanner />
      <ContentContainer>
        <StyledImage
          width="338"
          height="450"
          src={process.env.NEXT_PUBLIC_PROFILE_LINK ?? "/404"}
          alt="Dennis Cope in front of his glorious Honda Fit"
        />
        <HideOnSmallScreens>
          <VerticalDivider />
        </HideOnSmallScreens>
        <CopyContainer>
          <Copy size="body">
            Hi! I&apos;m Dennis, currently a software engineer at{" "}
            <Link href="https://www.grubhub.com/">Grubhub</Link>.
          </Copy>
          <Copy size="body">
            I enjoy creating maintainable and performant frontend applications
            with tools like TypeScript and React.
          </Copy>
          <Copy size="body">
            For a better idea of what I do, check out my{" "}
            <Link href={process.env.NEXT_PUBLIC_RESUME_LINK ?? "/404"}>
              resume
            </Link>
            .
          </Copy>
        </CopyContainer>
      </ContentContainer>
      <Copy size="largeBody">You can find me on</Copy>
      <SocialLinks />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 3em;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 5em;
  max-width: 60em;
  align-items: center;
  margin: 1em 3em;

  @media (max-width: ${SMALL_SCREEN_MAX_WIDTH}px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5em;
  }
`;

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  clip-path: circle();

  @media (max-width: ${SMALL_SCREEN_MAX_WIDTH}px) {
    height: auto;
  }
`;

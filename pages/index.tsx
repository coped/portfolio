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
import work from "../src/assets/work.svg";
import resume from "../src/assets/description.svg";

const INDEX_ICON_DIMENSION = 60;

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
        <div className="index__content-container">
          <div className="index__content-row">
            <Image
              src={work}
              alt="Icon representing a resume"
              height={INDEX_ICON_DIMENSION}
              width={INDEX_ICON_DIMENSION}
            />
            <Copy size="body">
              Software engineer at{" "}
              <Link href={process.env.NEXT_PUBLIC_EMPLOYER_LINK ?? "/404"}>
                {process.env.NEXT_PUBLIC_EMPLOYER_NAME}
              </Link>
            </Copy>
          </div>
          <div className="index__content-row">
            <Image
              src={resume}
              alt="Icon representing a resume"
              height={INDEX_ICON_DIMENSION}
              width={INDEX_ICON_DIMENSION}
            />
            <Copy size="body">
              <Link href={process.env.NEXT_PUBLIC_RESUME_LINK ?? "/404"}>
                Resume
              </Link>
            </Copy>
          </div>
        </div>
      </ContentContainer>
      <Copy size="largeBody">Links</Copy>
      <SocialLinks />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 3em;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 5em;
  max-width: 60em;
  align-items: center;
  margin: 1em 3em;

  @media (max-width: ${SMALL_SCREEN_MAX_WIDTH}px) {
    flex-direction: column;
    gap: 0.5em;
  }
`;

const StyledImage = styled(Image)`
  clip-path: circle();

  @media (max-width: ${SMALL_SCREEN_MAX_WIDTH}px) {
    height: auto;
  }
`;

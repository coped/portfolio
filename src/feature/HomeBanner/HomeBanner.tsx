import type { ReactElement } from "react";
import styled from "styled-components";
import { Banner } from "../../components/Banner/Banner";
import { Terminal } from "../Terminal";
import { BannerHeading } from "./BannerHeading";

export function HomeBanner(): ReactElement {
  return (
    <StyledBanner>
      <Terminal />
      <BannerHeading>Dennis Cope</BannerHeading>
    </StyledBanner>
  );
}

const StyledBanner = styled(Banner)`
  flex-direction: column;
  align-items: center;
`;

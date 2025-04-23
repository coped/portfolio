import styled from "styled-components";
import { SMALL_SCREEN_MAX_WIDTH } from "../../lib/constants";

export const HideOnSmallScreens = styled.div`
  @media (max-width: ${SMALL_SCREEN_MAX_WIDTH}px) {
    display: none;
  }
`;

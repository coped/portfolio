import styled from "styled-components";
import { Heading } from "../../components/Heading";

export const BannerHeading = styled(Heading)`
  ::selection {
    background: #1b8dff;
  }
  text-align: center;
  color: white;
  text-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);
  margin-top: 0.5em;
`;

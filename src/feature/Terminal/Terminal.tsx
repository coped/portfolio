import { ReactElement } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Output } from "./Output";

export function Terminal(): ReactElement {
  return (
    <Container>
      <Buttons>
        <Button color="red" />
        <Button color="yellow" />
        <Button color="green" />
      </Buttons>
      <Output />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #272822;
  color: #f8f8f2;
  border-radius: 5px;
  padding: 0.7em;
  width: fit-content;
  gap: 0.5em;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

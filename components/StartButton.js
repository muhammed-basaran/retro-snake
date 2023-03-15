import styled from "styled-components";
import Link from "next/link";

export default function StartButton() {
  return (
    <StyledSection>
      <Link href="/game">
        <StyledStartButton>START GAME</StyledStartButton>;
      </Link>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: relative;
  height: 10rem;
  bottom: -320px;
  text-align: center;
`;

const StyledStartButton = styled.button`
  font-size: 3.5rem;
  margin: 10px;
  padding: 5px;
  font-family: Public Pixel;
`;

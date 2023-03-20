import Link from "next/link";
import Header from "../../../components/Header";
import styled from "styled-components";

export default function Game() {
  return (
    <StyledMain>
      <Header />
      <Link href="/">
        <StyledExitButton> X </StyledExitButton>
      </Link>
      <StyledScore>Score: </StyledScore>
      <StyledGameFrame>
        <canvas id="frame" width="480" height="480"></canvas>
      </StyledGameFrame>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  background-color: black;
  width: 100vw;
  height: 100vh;
  margin: 0;
  color: white;
  font-family: Public Pixel;
  text-align: center;
`;

const StyledExitButton = styled.button`
  position: absolute;
  left: 40px;
  top: 195px;
  margin-top: 0px;
  padding: 5px;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  font-family: Public Pixel;
`;

const StyledScore = styled.p`
  margin-top: 50px;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  font-family: Public Pixel;
`;

const StyledGameFrame = styled.section`
  position: absolute;
  top: 250px;
  margin: 20px;
  border: 2px solid white;
  width: 90vw;
  height: 50vh;
`;

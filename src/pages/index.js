import Header from "../../components/Header";
import StartButton from "../../components/StartButton";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledMain>
      <Header />
      <StartButton />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  background-color: black;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

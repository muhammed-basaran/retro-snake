import { reactStrictMode } from "../next.config";
import styled from "styled-components";

export default function Header() {
  return <StyledHeader>RETRO SNAKE</StyledHeader>;
}

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 60px;
  font-family: Public Pixel;
  color: #00ff35;
  margin-top: 40px;
`;

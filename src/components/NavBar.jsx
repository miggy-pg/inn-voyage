import styled from "styled-components";

const StyledNavBar = styled.nav`
  padding-top: 60px;
  padding-bottom: 40px;
  width: 20%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 1001;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;

  .aside-logo {
    text-align: center;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 4rem;
    text-transform: uppercase;
    font-size: 38px;
    color: #000;
  }
`;

export default StyledNavBar;

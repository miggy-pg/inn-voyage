import styled from "styled-components";

const StyledMain = styled.main`
  width: 80%;
  float: right;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  background-color: var(--color-grey-100);

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default StyledMain;

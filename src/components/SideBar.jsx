import styled from "styled-components";

const StyledAside = styled.aside`
  padding-top: 60px;
  padding-bottom: 40px;
  width: 20%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: hidden;
  z-index: 1001;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  border-right: 1px solid #e5e5e5;

  & ul {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 1200px) {
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 270px;
    -moz-transform: translateX(-270px);
    -webkit-transform: translateX(-270px);
    -ms-transform: translateX(-270px);
    -o-transform: translateX(-270px);
    transform: translateX(-270px);

    & span {
      margin-bottom: 1em;
    }
  }
`;

export default StyledAside;

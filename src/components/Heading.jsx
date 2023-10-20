import styled from "styled-components";

// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `
  font-size: 3.5rem;
  font-weight: 700;
`}
  ${(props) =>
    props.as === "h2" &&
    `
  font-size: 2.5rem;
  font-weight: 700;
`}
  ${(props) =>
    props.as === "h3" &&
    `
  font-size: 1.5rem;
  font-weight: 700;
`}

  line-height: 1.5;
`;

export default Heading;

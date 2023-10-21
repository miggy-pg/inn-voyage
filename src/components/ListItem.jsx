import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: black;

  &:hover {
    text-decoration: none;
    color: red;
  }

  &:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
  }

  &.active {
    color: blue;
  }

  &.active {
    &:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -ms-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;

export const StyledListItems = styled.li`
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
`;

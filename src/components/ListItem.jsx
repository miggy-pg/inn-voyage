import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  position: relative;
  padding: 10px 10px;
  letter-spacing: 0.2em;
  font-family: "Roboto", Arial, sans-serif;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  &:hover {
    text-decoration: none;
    color: red;
  }

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 7px;
    left: 10px;
    right: 10px;
    background-color: #228896;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &.active {
    color: blue;

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

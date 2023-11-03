import StyledPageContainer from "../StyledPageContainer";
import { StyledListItems, StyledNavLink } from "./ListItem";
import StyledNavBar from "../NavBar";
import StyledAside from "../SideBar";
import { Outlet } from "react-router-dom";
import StyledMain from "../Main";

export default function AppLayout() {
  return (
    <StyledPageContainer>
      <StyledAside>
        <StyledNavBar>
          <h1 className="aside-logo">Inn Voyage</h1>
          <ul>
            <StyledListItems>
              <StyledNavLink to="/dashboard">Home</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/book">Book</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/cabins">Cabins</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/settings">Settings</StyledNavLink>
            </StyledListItems>
          </ul>
        </StyledNavBar>
      </StyledAside>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledPageContainer>
  );
}

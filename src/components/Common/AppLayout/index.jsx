import StyledPageContainer from "./styles/StyledPageContainer";
import { StyledListItems, StyledNavLink } from "./styles/StyledListItem";
import StyledNavBar from "./styles/StyledNavBar";
import StyledAside from "./styles/StyledAside";
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
              <StyledNavLink to="/bookings">Bookings</StyledNavLink>
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

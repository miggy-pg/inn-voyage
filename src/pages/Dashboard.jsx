import { StyledListItems, StyledNavLink } from "../components/ListItem";
import StyledNavBar from "../components/NavBar";
import StyledPageContainer from "../components/Page";
import StyledAside from "../components/SideBar";

export default function Dashboard() {
  return (
    <StyledPageContainer>
      <StyledAside>
        <StyledNavBar>
          <h1>
            <span>Marble</span>
          </h1>
          <ul>
            <StyledListItems>
              <StyledNavLink to="/dashboard">Home</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/book">Book</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/cabin">Cabins</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/settings">Settings</StyledNavLink>
            </StyledListItems>
          </ul>
        </StyledNavBar>
      </StyledAside>
    </StyledPageContainer>
  );
}

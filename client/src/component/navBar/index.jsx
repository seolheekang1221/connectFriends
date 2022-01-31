import { styled } from  "@mui/material";
import SearchBar from "./SearchBar";
import NavBarDropDown from "./NavBarDropDown";

const Root = styled("div")(() => ({
  width: "100%",
  height: "8vh",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "blanchedalmond",
  alignItems: "center",
}));

export default function NavBar() {
  // userAuth currently temporary holder until db and backend is set up but once the auth is controlled, search bar will appear else no search bar.
  const userAuth = true;

  return(
    <Root>
      <div style={{ marginLeft: "5em" }}>
        Comect
      </div>
      {userAuth? <SearchBar /> : null}
      <NavBarDropDown />
    </Root>
  );
}
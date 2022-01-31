import { styled } from "@mui/material";
import { Menu } from "@material-ui/icons";

export default function NavBarDropDown() {
  const Root = styled("div")(()=> ({
    marginRight: "5em"
  }));
  return (
    <Root>
      <Menu />
    </Root>
  );
}
import { useState } from "react";
import { TextField, IconButton, styled } from "@mui/material";
import { Search } from  "@material-ui/icons";
import navigationBarRepository from "./data/repository";

const Root = styled("div")(() => ({
  
}));

export default function SearchBar() {
  const [name, setName] = useState("");

  const handleTextInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // navigationBarRepository.searchFriends(name);
  };

  return(
    <Root>
      <TextField
        sx={{ width: "25em"}}
        placeholder="Type your friend's name"
        value={name}
        onChange={handleTextInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
      />
      <IconButton
        onClick={handleSearch}
      >
        <Search />
      </IconButton>
    </Root>
  )
};
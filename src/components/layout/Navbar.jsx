import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Navbar = ({ search, setSearch, setPage }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    return navigate("");
  };

  const handleSearchChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={handleClick}
        >
          <StoreIcon />
        </IconButton>
        <Typography variant="h6" onClick={handleClick}>
          Sneaker House
        </Typography>
        <InputBase
          value={search}
          onChange={handleSearchChange}
          placeholder="Search"
          sx={{ marginLeft: 4, width: "50%", backgroundColor: "white" }}
          startAdornment={<SearchIcon />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

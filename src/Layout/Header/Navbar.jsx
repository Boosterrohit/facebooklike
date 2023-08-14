import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DataObject, Mail, MessageSharp } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const SearchTaker = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "2px 19px",
  borderRadius: "5px",
  display: "flex",
  color: "gray",
  justifyContent: "center",
  alignItems: "center",
}));
const IconButtonq = styled(IconButton)(({ theme }) => ({
  color: "white",
  gap: "25px",
  background: "none",
}));
const Upercase = styled(Box)(({ theme }) => ({}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" component="Header">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          B0oo0sTeR
        </Typography>
        <DataObject sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchTaker>
          <InputBase sx={{ width: "100%" }} placeholder="Search..." />
          <SearchIcon />
        </SearchTaker>
        <IconButtonq
          className="kak"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Badge badgeContent={5} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={7} color="error">
            <MessageSharp color="white" />
          </Badge>

          <Avatar
            onClick={(e) => setOpen(true)}
            src="https://randomuser.me/api/portraits/men/57.jpg"
            alt="B0oo0sTeR"
            sx={{ width: "34px", height: "34px" }}
          />
        </IconButtonq>
        <Upercase
          sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
        >
          <Avatar
            onClick={(e) => setOpen(true)}
            src="https://randomuser.me/api/portraits/men/57.jpg"
            alt="B0oo0sTeR"
            sx={{ width: "34px", height: "34px" }}
          />
          <Typography>Rohit</Typography>
        </Upercase>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

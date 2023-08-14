import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Article,
  Diversity2,
  Groups,
  NightlightRound,
  PermContactCalendar,
  Settings,
  Storefront,
} from "@mui/icons-material";
const SideBar = () => {
  return (
    <Box
      flex={1.5}
      className="ikp"
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, height: "84.8vh" }}
    >
      <Box position="fixed">
        <List>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#Pages">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#groups">
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#Market">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#friends">
              <ListItemIcon>
                <Diversity2 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#setting">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#setting">
              <ListItemIcon>
                <PermContactCalendar />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton LinkComponent="a" href="#setting">
              <ListItemIcon>
                <NightlightRound />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;

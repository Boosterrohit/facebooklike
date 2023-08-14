import {
  Avatar,
  Box,
  Typography,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={2.5}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      className="ikp"
    >
      <Box position="fixed" width={300}>
        <Typography variant="h5" fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup total={24} max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/27.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/women/27.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/women/17.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/women/2.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/women/3.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={3} mb={3}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} className="ni">
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/200×200/?women"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img src="https://source.unsplash.com/random/200×200/?men" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/200×200/?animal"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={3}>
          Latest Conversetion
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/random/200×200/?car"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://source.unsplash.com/random/200×200/?girl"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;

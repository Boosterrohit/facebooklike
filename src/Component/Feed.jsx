import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
const Feed = () => {
  return (
    <Box flex={5.4} p={2} sx={{ display: { xs: "block", sm: "block" } }}>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/men/27.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Sabin Paudel"
            subheader="September 14, 2020"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/women/57.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Manisha Khanal"
            subheader="September 14, 2023"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/user/wsanter"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/women/7.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2019"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?fruit"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Dipak Sinha"
            subheader="March 14, 2022"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?men"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/women/97.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Elisha Thapa"
            subheader="July 24, 2023"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?women"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="John william"
            subheader="June 14, 2016"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?home"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/women/16.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Anna Trimerz"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?club"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Alliza London"
            subheader="August 14, 2023"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?girls"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/men/21.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="RamPujan Yadav"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?boy"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/women/87.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?friends"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Rohit Kumar Sah"
            subheader="July 14, 2023 "
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?Bike"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
      <Paper>
        <Card sx={{ mt: "18px" }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="B0oo0sTeR"
                sx={{ width: "34px", height: "34px" }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Sandeep Chaudary"
            subheader="july 14, 2019"
          />
          <CardMedia
            component="img"
            height="320px"
            image="https://source.unsplash.com/random/?car"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
};

export default Feed;

import React from "react";
import { Box, Stack } from "@mui/material";
import SideBar from "../Component/SideBar";
import Feed from "../Component/Feed";
import RightBar from "../Component/RightBar";
const AllLayout = () => {
  return (
    <Box component="main" id="main">
      <Stack justifyContent="space-between" direction="row" spacing={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default AllLayout;

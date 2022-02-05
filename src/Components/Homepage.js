import { Box } from "@mui/system";
import React from "react";
import SideMenu from "./SideMenu";
import Assignments from "./Assignments";

export default function Homepage() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SideMenu />
      <Assignments />
    </Box>
  );
}

import { Box } from "@mui/system";
import React from "react";
import SideMenu from "./SideMenu";
import Assignments from "./Assignments";
import { state } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [a, b, auth, setAuth] = React.useContext(state);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (auth === false) {
      navigate("/signin");
    }
  }, []);

  console.log(auth);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SideMenu />
      <Assignments />
    </Box>
  );
}

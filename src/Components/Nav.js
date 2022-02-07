import * as React from "react";
import { Toolbar, Typography, Box, AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { state } from "../Context/Context";

export default function Nav() {
  const navigate = useNavigate();
  const [a, b, auth, setAuth] = React.useContext(state);
  const handleLogout = () => {
    setAuth("false");
    navigate("/signin");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            Assignment Manager
          </Typography>
          {auth && (
            <>
              <Button color="inherit" onClick={() => navigate("/")}>
                Assignments
              </Button>
              <Button color="inherit" onClick={() => navigate("/add")}>
                Add Assignment
              </Button>

              <Button color="inherit" onClick={() => handleLogout()}>
                Log Out
              </Button>
            </>
          )}
          {!auth && (
            <>
              <Button color="inherit" onClick={() => navigate("/signin")}>
                Sign in
              </Button>
              <Button color="inherit" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </Box>
  );
}

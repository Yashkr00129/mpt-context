import * as React from "react";
import {Toolbar,Typography,Box,AppBar,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            Assignment Manager
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Assignments
          </Button>
          <Button color="inherit" onClick={() => navigate("/add")}>
            Add Assignment
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

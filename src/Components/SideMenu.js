import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Icons
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TaskIcon from "@mui/icons-material/Task";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import ForumIcon from "@mui/icons-material/Forum";

import DashboardIcon from "@mui/icons-material/Dashboard";

export default function SideMenu() {
  const linksOne = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "News Feed", icon: <NewspaperIcon /> },
    { text: "Inbox", icon: <InboxIcon /> },
    { text: "Tasks", icon: <TaskIcon /> },
  ];
  const linksTwo = [
    { text: "Buttons", icon: <RadioButtonCheckedIcon /> },
    { text: "Typography", icon: <FormatColorTextIcon /> },
    { text: "Forums", icon: <ForumIcon /> },
  ];

  const drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {linksOne.map((link, index) => (
          <ListItem button key={link.text}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {linksTwo.map((link, index) => (
          <ListItem button key={link.text}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

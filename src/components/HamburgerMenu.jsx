import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import categories from "../data/categories";
import { createTheme, ThemeProvider } from "@mui/material";
export default function SwipeableTemporaryDrawer({ setCategory }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        paddingLeft: "10px",
        paddingRight: "5px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>Catergories</List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              style={{ height: 40, borderRadius: 3 }}
              onClick={() => setCategory(text)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}

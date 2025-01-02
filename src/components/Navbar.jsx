import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontFamily: "Playfair Display",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          BookBrowse
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            sx={{
              fontWeight: 500,
              textDecoration: "none",
              color: "text.primary",
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            to="/about"
            variant="body1"
            sx={{
              fontWeight: 500,
              textDecoration: "none",
              color: "text.primary",
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            About
          </Typography>
        </Box>

        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { backgroundColor: "background.paper" },
          }}
        >
          <Box sx={{ width: 250 }}>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ alignSelf: "flex-end", p: 1 }}
            >
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem
                button
                component={Link}
                to="/"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/about"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

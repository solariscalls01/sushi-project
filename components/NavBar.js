"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavLinks from "./Nav-links";
import Link from "next/link";
import styles from "../app/ui/global.css";
import DaimonjiLogo from "./Daimonji-logo";
import Slide from '@mui/material/Slide';

const drawerWidth = 240;
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "To Go", href: "/" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6">
        <Link href="/" passHref style={{ color: "#023859" }} underline="hover">
          {"DAIMONJI SUSHI"}
        </Link>
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              key={item.name}
              href={item.href}
              passHref
              style={{ width: "100%" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", width: "10%" }} className={styles.container}>
        <CssBaseline />
        <HideOnScroll>

          <AppBar component="nav" sx={{
            width: "100%", margin: "0 auto", backgroundColor: "#3594e8", color: "#FFF", "& .MuiTypography-root": {
              fontWeight: "bold",
            }
          }
          } >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <DaimonjiLogo />
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: "block", sm: "block", md: "none", lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, mr: "4rem" }}>
                <NavLinks />
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Box component="main" sx={{ p: 3 }}>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </Box >
    </>
  );
}

export default DrawerAppBar;

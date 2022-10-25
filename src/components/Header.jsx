import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";

const pages = [
  {
    description: "Home",
    ancora: "/",
  },
  {
    description: "Destinos",
    ancora: "/destinations",
  },
  {
    description: "Promoções",
    ancora: "/promotions",
  },
  {
    description: "Contato",
    ancora: "/about",
  },
];

const Header = () => {
  const endpoint = window.location.pathname;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      hidden={endpoint === "/register" || endpoint === "/login"}
      sx={{ backgroundColor: "#ffa726" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink to="/">
              <img src="/images/aviao.png" alt="Logo" width={50} />
            </NavLink>
          </Box>

          {/* Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((item) => (
                <MenuItem key={item.description} onClick={handleCloseNavMenu}>
                  <NavLink to={item.ancora}>
                    <Typography textAlign="center">
                      {item.description}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
            }}
          >
            <NavLink to="/">
              <img src="/images/aviao.png" alt="Logo" width={50} />
            </NavLink>
          </Box>

          {/* Web */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((item) => (
              <NavLink key={item.description} to={item.ancora}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "flex" }}
                >
                  {item.description}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

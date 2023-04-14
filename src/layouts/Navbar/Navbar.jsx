import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";

import { useValue } from "../../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

//assets
import Logo from "../../assets/logo/Logo.svg";
import HeartIcon from "../../assets/icons/HeartIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";

import { useLoggedInStore } from "../../store/useStore";

import style from "./Navbar.styles";

// const pages = ['Home', 'Associations', 'Categories', 'Contact'];

function ResponsiveAppBar() {
  let navigate = useNavigate();

  const { dispatch } = useValue();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElConnect, setAnchorElConnect] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenConnectMenu = (event) => {
    setAnchorElConnect(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseConnectMenu = () => {
    setAnchorElConnect(null);
  };

  const loggedIn = useLoggedInStore((state) => state.loggedIn);
  const loggedOut = useLoggedInStore((state) => state.logout);

  return (
    <AppBar sx={style.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={style.displayOnMd}>
            <Link to="/">
              <Box component="img" sx={style.logoOnMd} alt="Logo" src={Logo} />
            </Link>
          </Typography>

          <Box sx={style.displayOnXs}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
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
              sx={style.smallMenu}
            >
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Typography sx={style.boldText}>
                  <Link style={style.link} to="/">
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="Categories" onClick={handleCloseNavMenu}>
                <Typography sx={style.boldText}>
                  <Link style={style.link} to="Categories">
                    Catégories
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="Associations" onClick={handleCloseNavMenu}>
                <Typography sx={style.boldText}>
                  <Link style={style.link} to="Associations">
                    Associations
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="contact" onClick={handleCloseNavMenu}>
                <Typography sx={style.boldText}>
                  <Link style={style.link} to="contact">
                    Contactez-Nous
                  </Link>
                </Typography>
              </MenuItem>
                {!loggedIn ? (<div>
              <MenuItem key="Register" onClick={handleCloseNavMenu}>
                <Typography
                  sx={style.registerText}
                  onClick={() => dispatch({ type: "OPEN_REGISTER" })}
                >
                  Créer un compte
                </Typography>
              </MenuItem>
              <MenuItem key="Login" onClick={handleCloseNavMenu}>
                <Typography
                  sx={style.boldText}
                  onClick={() => dispatch({ type: "OPEN_LOGIN" })}
                >
                  Se Connecter
                </Typography>
              </MenuItem>
              </div>) : (<div></div>) }
            </Menu>
          </Box>

          <Typography sx={style.displayOnXs}>
            <Link to="/">
              <Box component="img" sx={style.logoOnXs} alt="Logo" src={Logo} />
            </Link>
          </Typography>

          <Box sx={style.displayOnMd}>
            <Button
              key="/"
              onClick={handleCloseNavMenu}
              sx={style.displayTextField}
            >
              <Link style={style.link} to="/">
                Home
              </Link>
            </Button>
            <Button
              key="Categories"
              onClick={handleCloseNavMenu}
              sx={style.displayTextField}
            >
              <Link style={style.link} to="Categories">
                Catégories
              </Link>
            </Button>
            <Button
              key="Associations"
              onClick={handleCloseNavMenu}
              sx={style.displayTextField}
            >
              <Link style={style.link} to="Associations">
                Associations
              </Link>
            </Button>
            <Button
              key="Contact"
              onClick={handleCloseNavMenu}
              sx={style.displayTextField}
            >
              <Link style={style.link} to="Contact">
                Contactez-Nous
              </Link>
            </Button>
          </Box>

          {!loggedIn ? (
            <Box sx={style.displayOnMd}>
              <Box
                component="img"
                sx={style.icon}
                alt="SearchIcon"
                src={SearchIcon}
              />
              <Box
                component="img"
                sx={style.icon}
                alt="HeartIcon"
                src={HeartIcon}
              />

              <Box sx={style.borderLeft}>
                <Button
                  sx={style.register}
                  onClick={() => dispatch({ type: "OPEN_REGISTER" })}
                >
                  Créer un compte
                </Button>
              </Box>
              <Box sx={style.borderRight}>
                <Button
                  sx={style.login}
                  onClick={() => dispatch({ type: "OPEN_LOGIN" })}
                >
                  Se Connecter
                </Button>
              </Box>
            </Box>
          ) : (
            <Box sx={{display:'flex', flexGrow:1}}>
              <Box
                component="img"
                sx={style.icon}
                alt="SearchIcon"
                src={SearchIcon}
              />
              <Box
                component="img"
                sx={style.icon}
                alt="HeartIcon"
                src={HeartIcon}
                borderRight="1px solid black"
              />

              <Box>
                <Button
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-user"
                  aria-haspopup="true"
                  onClick={handleOpenConnectMenu}
                  color="black"
                >
                  <Box
                    component="img"
                    sx={{ width: "36px", borderRadius: "18px", mr: 1 }}
                    alt="UserIcon"
                    src={localStorage.getItem("picture")}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  >
                    {localStorage.getItem("username")}
                  </Typography>
                </Button>
                <Menu
                  id="menu-user"
                  anchorEl={anchorElConnect}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElConnect)}
                  onClose={handleCloseConnectMenu}
                  sx={style.menu}
                >
                  <MenuItem key="userDashboard" onClick={handleCloseConnectMenu}>
                    <Typography sx={style.boldText}>
                      <Link style={style.link} to="/userDashboard">
                        Mon Compte
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    key="logout"
                    onClick={() => {
                      handleCloseConnectMenu();
                      loggedOut();
                      navigate("/");
                    }}
                  >
                    <Typography sx={style.logout}>
                      <LogoutIcon />
                      <Link style={style.logout} to="/">
                        Se déconnecter
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
              {/* <Box
              sx={style.borderLeft}
            >
              <Button color="black"><Box component="img" sx={{ width:"36px", borderRadius:"18px"}} alt="UserIcon" src={localStorage.getItem("picture")} />
              </Button>
              <Button
                sx={style.register}
                onClick={() => navigate("/userDashboard")}
              >
                {localStorage.getItem("username")}
              </Button>
            </Box>
            <Box
              sx={style.borderRight}
            >
              <Button
                sx={style.login}
                onClick={() => 
                  {
                  loggedOut();
                  navigate("/");
                  }}
              >
                Se déonnecter
              </Button>
            </Box> */}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

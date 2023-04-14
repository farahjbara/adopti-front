import React, { useEffect } from "react";

import "./Homepage.css";
import style from "./Homepage.styles";

import header from "../../assets/header.svg";
import { Box, Button, IconButton, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import TuneIcon from "@mui/icons-material/Tune";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";
import { Stack } from "@mui/system";
import SearchIcon from "../../assets/icons/PinkSearchIcon.svg";

import CatIcon from "../../assets/icons/CatIcon.svg";
import DogIcon from "../../assets/icons/DogIcon.svg";
import BirdIcon from "../../assets/icons/BirdIcon.svg";
import FishIcon from "../../assets/icons/FishIcon.svg";
import RabbitIcon from "../../assets/icons/RabbitIcon.svg";


import HomeIcon from "../../assets/icons/HomeIcon.svg";
import api from "../../services/api";

// import Card from './card';
import Card from "../../components/atoms/Card/Card";
import AssociationCard from "../../components/molecules/AssociationCard";

function Homepage() {
  const [anchorElCategorie, setAnchorElCategorie] = React.useState(null);

  const handleOpenCategorieMenu = (event) => {
    setAnchorElCategorie(event.currentTarget);
  };

  const handleCloseCategorieMenu = () => {
    setAnchorElCategorie(null);
  };

  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsYWFAZ21haWwuY29tIiwiaWF0IjoxNjgwMTcyMDUyLCJleHAiOjE2ODAyNTg0NTJ9.nl-Z_C_Ays37OwyS5sVWhUrRg6gwmn1FtbJliBM7sJc"
      },
  };

  const [associationData, setAssociationData] = React.useState([]);
  const handleGetAssociations = async () => {
    const response = await api.get("/associations/random", config);
    setAssociationData(response.data.data);
  };
  React.useEffect(() => {
    handleGetAssociations();
  }, []);
  // console.log(associationData);

  const [animalData, setAnimalData] = React.useState([]);
  const handleGetPets = async () => {
    const response = await api.get("/animals/recent", config);
    setAnimalData(response.data.data);
  };

  React.useEffect(() => {
    handleGetPets();
  }, []);
  // console.log(animalData);

  

  return (
    <main className="page">
      <Box component="img" src={header} alt="header" sx={style.headerImg} />
      <Box sx={{ px: "6rem",paddingBottom:'4rem', display:'flex', flexDirection:'column', gap:'4rem'}}>
        <Box>
        <h2>Recherche</h2>
        <Stack direction="row" spacing={2}>
          <Box
            border={2}
            borderColor="primary.main"
            borderRadius="10px"
            height="2.9rem"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              
              gap:'0.5rem'
            }}
            overflow="hidden"
            width="30%"
          >
            <Box borderRight={2} borderColor="primary.main" px="1rem" >
              <IconButton onClick={handleOpenCategorieMenu}>
                <TuneIcon color="primary" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElCategorie}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElCategorie)}
                onClose={handleCloseCategorieMenu}
                sx={style.smallMenu}
              >
                <MenuItem key="test" onClick={handleCloseCategorieMenu}>
                  <Typography sx={style.boldText}>
                    <Link style={style.link} to="/">
                      test
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <input type="text" className="field" placeholder="Région.." />
            {/* <Box px="1rem">
              <TextField
                id="outlined-select"
                sx={{ color: "primary" }}
                select
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TuneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box> */}
          </Box>
          <Box
            border={2}
            borderColor="primary.main"
            borderRadius="10px"
            height="2.5rem"
            overflow="hidden"
            width="100%"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding:'.2rem'
            }}
          >
            <Box height="2.5rem"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap:'1rem'
            }}>
              <Box borderRight={2} borderColor="primary.main" px="1rem"
                height="3rem" 
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}>
              <Box
                height="1.5rem"
                component="img"
                sx={style.icon}
                alt="SearchIcon"
                src={SearchIcon}
              /></Box>
              <input type="text" className="field" placeholder="Recherche.." />
            </Box>

            <Button variant="contained" size='large'>Rechercher</Button>
          </Box>
        </Stack>
        </Box>
        <Box>
          <h2>Catégories</h2>
          <Box sx={{ display: "flex", justifyContent:'space-around' }}>
            <Box component="img" src={CatIcon} maxHeight="10rem" />
            <Box component="img" src={DogIcon} maxHeight="10rem" />
            <Box component="img" src={BirdIcon} maxHeight="10rem" />
            <Box component="img" src={FishIcon} maxHeight="10rem" />
            <Box component="img" src={RabbitIcon} maxHeight="10rem" />
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Animaux récents</h2>
            <Link to="/Categories" >
            <Button variant="outlined" size="large">
              Voir tout
            </Button></Link>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
            {animalData.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Associations</h2>
            <Link to="/Associations"><Button variant="outlined" size="large">
              Voir tout
            </Button></Link>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
            {associationData.map((item) => (
              <AssociationCard key={item.id} data={item} />
            ))}
          </Box>
        </Box>
        <Box position="relative" >
          <div>
             <img src={HomeIcon} className="image" alt="image" />
             <div className='bottomText'>
                <h1>Trouvez l'animal qui vous <br/>convient et sauvez une vie!</h1>
                <Link to='/Contact'><Button variant="contained" size="large" sx={{}}>Contactez une association</Button></Link>
             </div>
          </div>
        </Box>
      </Box>
    </main>
  );
}

export default Homepage;

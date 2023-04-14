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


import { Link } from "react-router-dom";

//assets
import Logo from "../../assets/logo/Logo.svg";
import style from './Footer.styles';

const pages1 = ['Home', 'Associations', 'Catégories', 'Favoris'];
const pages2 = ["S'inscrire", 'Connexion', 'Contact', 'Faq'];
const pages3 = ['Terms & Conditions', 'Privacy Policy', 'Accessibility', 'Legal'];


const Footer = () => {


  return (
    <div>
    <AppBar position="static" color="gray" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center' ,margin:"2rem"}}>
                <Box
                component="img"
                src={Logo}
                height="3.5rem"
                >
                    
                </Box>
                <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' ,flexWrap:'wrap'  }}>
                    {pages1.map((page) => (
                        <Button key={page} color="inherit" sx={{ ml: 2 }}>
                            <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'black' }}>{page}</Link>
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' ,flexWrap:'wrap'  }}>
                    {pages2.map((page) => (
                        <Button key={page} color="inherit" sx={{ ml: 2 }}>
                            <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'black' }}>{page}</Link>
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' ,flexWrap:'wrap'  }}>
                    {pages3.map((page) => (
                        <Button key={page} color="inherit" sx={{ ml: 2 }}>
                            <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'black' }}>{page}</Link>
                        </Button>
                    ))}
                </Box>
            </Container>
        </Toolbar>
    </AppBar>
    <AppBar position="static" color="black" sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
        <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'center', alignItems:'flex-start'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', maxHeight:'2rem',minHeight:'2rem' }}>
                <Typography variant="h6" component="div" sx={{ color:"#FFB800" }}>
                Created with Love by LaTech, Copyright © 2022
                </Typography>
            </Box>
        </Container>
    </Toolbar>
</AppBar>
</div>

  )
}

export default Footer
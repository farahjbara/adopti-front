import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PasswordField from "../../components/molecules/PasswordField";
import Button from "@mui/material/Button";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import IconButton from "@mui/material/IconButton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import style from "./UserDashboard.styles";

const UserDashboard = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const adrRef = useRef();
  const govRef = useRef();
  const vilRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  var defaultEmail = "";
  const authData = localStorage.getItem("AuthData");
  if (authData) {
    try {
      defaultEmail = JSON.parse(authData).email;
    } catch (error) {
      console.error("Error parsing auth data:", error);
    }
  } else {
    console.error("Auth data not found in local storage");
  }

  function refreshPage() {
    window.location.reload(false);
  }

  //TODO: get the social media from the database
  const[social, setSocial] = React.useState("yes");
  if (localStorage.getItem("id")==="11") {
    setSocial("no");
  }


  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      gouvernement: govRef.current.value,
      city: vilRef.current.value,
      adress: adrRef.current.value,
      AccountId: localStorage.getItem("id"),
      pictureUrl: localStorage.getItem("picture"),
      Social_Media: social,
    };
    try{
    const { data } = await api.post("/users", form);
    localStorage.setItem("AuthData", JSON.stringify(data.data));
    navigate("/");
    }catch(err){
      alert("error: ",err)
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={style.root}>
      <Paper variant="outlined" sx={style.paper}>
        <Box sx={style.box}>
          <Box>
            <Box
              component="img"
              sx={style.image}
              alt="UserIcon"
              src={localStorage.getItem("picture")}
            />
            <IconButton
              sx={style.cameraIcon}
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file"></input>
              <CameraAltOutlinedIcon />
            </IconButton>
          </Box>
          <Typography color="primary" fontWeight="Bold">
            id: {localStorage.getItem("id")}
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="Bold">Mes informations</Typography>
          <Box sx={style.field}>
            <TextField
              sx={style.width}
              margin="dense"
              variant="outlined"
              id="name"
              label="Nom complet"
              type="text"
              size="small"
              inputRef={nameRef}
              inputProps={{ minLength: 2 }}
              required
              defaultValue={localStorage.getItem("username")}
            />
            <TextField
              sx={style.width}
              margin="dense"
              variant="outlined"
              id="email"
              label="Email"
              type="email"
              size="small"
              inputRef={emailRef}
              required
              defaultValue={defaultEmail}
            />
          </Box>
          <Box sx={style.field}>
            <TextField
              sx={style.width}
              margin="dense"
              variant="outlined"
              id="goverment"
              label="Gouvernement"
              type="text"
              size="small"
              inputRef={govRef}
              inputProps={{ minLength: 2 }}
              required
              defaultValue={JSON.parse(localStorage.getItem("AuthData")).gouvernement}
            />
            <TextField
              sx={style.width}
              margin="dense"
              variant="outlined"
              id="ville"
              label="Ville"
              type="text"
              size="small"
              inputRef={vilRef}
              inputProps={{ minLength: 2 }}
              required
              defaultValue={JSON.parse(localStorage.getItem("AuthData")).city}
            />
          </Box>
          <TextField
            sx={style.fullWidth}
            margin="dense"
            variant="outlined"
            id="adresse"
            label="Adresse Compléte"
            type="text"
            size="small"
            inputRef={adrRef}
            inputProps={{ minLength: 2 }}
            required
            defaultValue={JSON.parse(localStorage.getItem("AuthData")).adress}
          />
        </Box>
        <Box>
          <Typography fontWeight="Bold">Mot de passe</Typography>
          <Box sx={style.field}>
            <PasswordField sx={style.width} {...{ passwordRef }} />
            <PasswordField
              margin="dense"
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirmer mot de passe"
            />
          </Box>
        </Box>
        <Box sx={style.bottomField}>
          <Button
            variant="outlined"
            sx={style.cancelButton}
            onClick={refreshPage}
          >
            Annuler
          </Button>
          <Button type="submit" variant="contained" sx={style.button}>
            Enregistrer
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserDashboard;

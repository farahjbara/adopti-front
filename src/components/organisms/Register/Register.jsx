
import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useRef, useState } from "react";
import { useValue } from "../../../context/ContextProvider";
import PasswordField from "../../molecules/PasswordField";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import Logo from "../../../assets/logo/Logo.svg";

import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

import style from "./Register.styles";
import "./Register.css";

const Register = () => {
  const {
    state: { openRegister },
    dispatch,
  } = useValue();

  const [isUser, setIsUser] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const adrRef = useRef();
  const telRef = useRef();
  const rnaRef = useRef();
  const siretRef = useRef();
  const govRef = useRef();
  const vilRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: "CLOSE_REGISTER" });
  };

  //mrama
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  //
  //mrama 2
  const [formCheckBox, setFormCheckBox] = useState({
    acceptedConditions: false
  });
  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormCheckBox((prevFormCheckBox) => ({
      ...prevFormCheckBox,
      [name]: name === "acceptedConditions" ? checked : value
    }));
  };
  //
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    if(!loading){
      setSuccess(false);
      setLoading(true);
    try{
      event.preventDefault();
      if(formCheckBox.acceptedConditions === false){
        setShowPopup(true);
        setSuccess(false);
        setLoading(false);
      }
      else{
      if (isUser) {  
      const form = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        gouvernement: govRef.current.value,
        city: vilRef.current.value,
        adress: adrRef.current.value,
       
      }; // AccountId: "11",
      await api.post("/users", form);
      setSuccess(true);
      setLoading(false);
      // sleep 1 second
      await new Promise((r) => setTimeout(r, 1000));
      navigate("/");
      handleClose();
    } else if (!isUser) {
      event.preventDefault();
      
      const form = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        gouvernement: govRef.current.value,
        city: vilRef.current.value,
        adress: adrRef.current.value,
        rna: rnaRef.current.value,
        siret: siretRef.current.value,
        tel: telRef.current.value,
        //default image for association
        imageUrl:"http://res.cloudinary.com/djluqunkq/image/upload/v1680737646/k0fcxjmujirrot4uamab.svg",
      };
      await api.post("/associations", form);
      setSuccess(true);
      setLoading(false);
      // sleep 1 second
      await new Promise((r) => setTimeout(r, 1000));
      navigate("/");
      handleClose();
    }
  }}catch(err){
       // sleep 1 second
       await new Promise((r) => setTimeout(r, 1000));
       setShowPopup(true);
       setSuccess(false);
       setLoading(false);
  }
  };
};

  
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const buttonSx = {
      display: "flex",
      alignItems: "stretch",
      background: "#E2168C",
      width: "85%",
      "&:hover": {
        background: "#E2168C",
      },
     marginTop:'-2rem',
     marginBottom:'-1rem',
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  return (
    <Dialog open={openRegister} onClose={handleClose}>
      <DialogTitle textAlign="center">
        <Box component="img" sx={style.logo} alt="Logo" src={Logo} />
        <IconButton sx={style.closeButton} onClick={handleClose}>
          <CancelRoundedIcon />
        </IconButton>
      </DialogTitle>

      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label" />
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="Particulier"
          sx={style.radioGroup}
        >
          <FormControlLabel
            value="Particulier"
            control={<Radio />}
            label="Je suis un particulier"
            onChange={() => setIsUser(!isUser)}
          />
          <FormControlLabel
            value="Association"
            control={<Radio />}
            label="Je représente une association"
            onChange={() => setIsUser(!isUser)}
          />
        </RadioGroup>
      </FormControl>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent sx={style.dialogContent}>
          <DialogContentText sx={style.dialogContentText}>
            Créer un compte
          </DialogContentText>
          {/* Particulier */}
          {isUser && (
            <DialogContent sx={style.form}>
              <TextField
                autoFocus
                margin="dense"
                variant="outlined"
                id="name"
                label="Nom complet"
                type="text"
                size="small"
                inputRef={nameRef}
                inputProps={{
                  pattern: "^(?=.{3,20}$)[a-zA-Z]+( [a-zA-Z]+){0,3}$",
                  title: "Name must be 3-20 characters long and only contain letters"
                }}
                required
              />
              <TextField
                margin="dense"
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                size="small"
                inputRef={emailRef}
                inputProps={{
                  type: "email",
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                  title: "Invalid email address"
                }}
                required
              />
              <Box>
                <TextField
                  sx={style.marginRight}
                  margin="dense"
                  variant="outlined"
                  id="goverment"
                  label="Gouvernement"
                  type="text"
                  size="small"
                  inputRef={govRef}
                  inputProps={{
                    pattern: "^(?=.{3,20}$)[a-zA-Z]+( [a-zA-Z]+){0,1}$",
                    title: "must be 3-20 characters long and only contain letters"
                  }}
                  required
                />
                <TextField
                  margin="dense"
                  variant="outlined"
                  id="ville"
                  label="Ville"
                  type="text"
                  size="small"
                  inputRef={vilRef}
                  inputProps={{
                    pattern: "^(?=.{3,20}$)[a-zA-Z]+( [a-zA-Z]+){0,3}$",
                    title: "must be 3-20 characters long and only contain letters"
                  }}
                  required
                />
              </Box>
              <TextField
                margin="dense"
                variant="outlined"
                id="adresse"
                label="Adresse Compléte"
                type="text"
                size="small"
                inputRef={adrRef}
                inputProps={{ minLength: 4 }}
                required
              />

              <PasswordField {...{ passwordRef }} />

              <PasswordField
                margin="dense"
                passwordRef={confirmPasswordRef}
                id="confirmPassword"
                label="Confirmer mot de passe"
              />
            </DialogContent>
          )}

          {/* Association */}
          {!isUser && (
            <DialogContent sx={style.form}>
              <TextField
                autoFocus
                margin="dense"
                variant="outlined"
                id="name"
                label="Nom de l'association"
                type="text"
                size="small"
                inputRef={nameRef}
                inputProps={{
                  pattern: "^(?=.{3,20}$)[a-zA-Z]+( [a-zA-Z]+){0,3}$",
                  title: "Nom de l'association must be 3-20 characters long and only contain letters"
                }}
                required
              />
              <TextField
                margin="dense"
                variant="outlined"
                id="rna"
                label="Numéro RNA"
                type="number"
                size="small"
                inputRef={rnaRef}
                inputProps={{ minLength: 2 }}
                required
              />

              <TextField
                margin="dense"
                variant="outlined"
                id="Siret"
                label="Numéro Siret"
                type="number"
                size="small"
                inputRef={siretRef}
                inputProps={{ minLength: 2 }}
                required
              />
              <Box>
                <TextField
                  sx={style.marginRight}
                  margin="dense"
                  variant="outlined"
                  id="goverment"
                  label="Gouvernement"
                  type="text"
                  size="small"
                  inputRef={govRef}
                  inputProps={{
                    pattern: "^(?=.{3,20}$)[a-zA-Z]+( [a-zA-Z]+){0,1}$",
                    title: "must be 3-20 characters long and only contain letters"
                  }}
                  required
                />
                <TextField
                  margin="dense"
                  variant="outlined"
                  id="ville"
                  label="Ville"
                  type="text"
                  size="small"
                  inputRef={vilRef}
                  inputProps={{
                    pattern: "^(?=.{3,20}$)[a-zA-Z]+( [a-zA-Z]+){0,3}$",
                    title: "must be 3-20 characters long and only contain letters"
                  }}
                  required
                />
              </Box>
              <TextField
                margin="dense"
                variant="outlined"
                id="adresse"
                label="Adresse Compléte"
                type="text"
                size="small"
                inputRef={adrRef}
                inputProps={{ minLength: 4 }}
                required
              />

              <TextField
                margin="dense"
                variant="outlined"
                id="tel"
                label="Numéro de téléphone"
                type="number"
                size="small"
                inputRef={telRef}
                inputProps={{ minLength: 8 }}
                required
              />
              <TextField
                margin="dense"
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                size="small"
                inputRef={emailRef}
                inputProps={{
                  type: "email",
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                  title: "Invalid email address"
                }}
                required
              />

              <PasswordField {...{ passwordRef }} />

              <PasswordField
                passwordRef={confirmPasswordRef}
                id="confirmPassword"
                label="Confirmer mot de passe"
              />
            </DialogContent>
          )}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="acceptedConditions"
                  checked={formCheckBox.acceptedConditions}
                  onChange={handleChange}
                  sx={{
                    color: "primary.main",
                    '&.Mui-checked': {
                    color: "primary.main",
                     },
                   }}
                  required
                />
              }
              required
              sx={style.dialogConditions}
              label="J'accepte les conditions générales de Adopti"
            />
          </FormGroup>
        </DialogContent>

        <DialogActions sx={style.dialogActions}>
          <Button type="submit" variant="contained" sx={buttonSx} disabled={loading}>
            S'inscrire
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: 'absolute',
                top: '82%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </DialogActions>
        <DialogContent sx={style.bottomDialogContent}>
          Vous avez déja un compte?
          <DialogContent
            sx={style.redirectText}
            onClick={() => {
              handleClose();
              dispatch({ type: "OPEN_LOGIN" });
            }}
          >
            Connectez-vous
          </DialogContent>
        </DialogContent>
      </Box>
      <Dialog open={showPopup} onClose={handleClosePopup}>
        <DialogTitle>Form Submission Error</DialogTitle>
        <DialogContent>
          Please fill all the required fields and accept the conditions.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default Register;

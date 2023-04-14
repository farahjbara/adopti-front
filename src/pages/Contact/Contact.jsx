import { Box, TextField } from "@mui/material";
import { React, useState } from "react";
import ContactIcon from "../../assets/icons/ContactIcon.svg";
import PetsIcon from "@mui/icons-material/Pets";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import api from "../../services/api";

//styles
import './ContactStyle.css'

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("Particulier");
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");
  const [agreementAccepted, setAgreementAccepted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFirstTextChange = (event) => {
    setFirstText(event.target.value);
  };

  const handleSecondTextChange = (event) => {
    setSecondText(event.target.value);
  };

  const handleThirdTextChange = (event) => {
    setThirdText(event.target.value);
  };

  const handleAgreementChange = (event) => {
    setAgreementAccepted(event.target.checked);
  };

  const clearForm = () => {
    setSelectedOption("Particulier");
    setFirstText("");
    setSecondText("");
    setThirdText("");
    setAgreementAccepted(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [showPopup2, setShowPopup2] = useState(false);
  const handleClosePopup2 = () => {
    setShowPopup2(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreementAccepted) {
      setShowPopup2(true);
    }
    const form = {
      name: selectedOption + " '" + firstText + "'",
      email: secondText,
      message: thirdText,
    };
    api
      .post("/contact/aacontact", form)
      .then((res) => {
        setShowPopup(true);
        clearForm();
      })
      .catch((err) => {
        setShowPopup2(true);
      });
  };

  return (
    <Box
     className="contact-box"
    >
      <div>
        <img src={ContactIcon}/>
        <Box
          className="contact-img"
        >
          <h1
           className="contact-title"
          >
            Contactez Nous
          </h1>
          <h1
           className="contact-text"
          >
            <br /> Un problème, une question, envie de nous envoyer un message ?
            N’hésitez pas à utiliser ce formulaire pour prendre contact avec
            nous !{" "}
          </h1>
        </Box>
      </div>
      <Box
        component="form"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <FormControl>
          <RadioGroup row defaultValue="Particulier">
            <FormControlLabel
              value="Particulier"
              control={
                <Radio
                  checked={selectedOption === "Particulier"}
                  onChange={handleOptionChange}
                />
              }
              label="Particulier"
            />
            <FormControlLabel
              value="Association"
              control={
                <Radio
                  checked={selectedOption === "Association"}
                  onChange={handleOptionChange}
                />
              }
              label="Association"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          // autoFocus
          margin="dense"
          variant="outlined"
          id="name"
          label="Votre nom"
          type="text"
          size="small"
          inputProps={{
            pattern: "^(?=.{3,20}$)[a-zA-Z]+( [a-zA-Z]+){0,3}$",
            title: "Name must be 3-20 characters long and only contain letters",
          }}
          value={firstText}
          onChange={handleFirstTextChange}
          required
        />
        <TextField
          margin="dense"
          variant="outlined"
          id="email"
          label="E-mail"
          type="text"
          size="small"
          inputProps={{
            type: "email",
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            title: "Invalid email address",
          }}
          value={secondText}
          onChange={handleSecondTextChange}
          required
        />
        <TextField
          margin="dense"
          variant="outlined"
          id="message"
          label="Votre message"
          type="text"
          multiline
          rows={6}
          value={thirdText}
          onChange={handleThirdTextChange}
          required
        />
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                name="agreement"
                checked={agreementAccepted}
                onChange={handleAgreementChange}
                sx={{
                  color: "primary.main",
                  "&.Mui-checked": {
                    color: "primary.main",
                  },
                }}
                required
              />
            }
            required
            label="J'accepte les conditions générales de Adopti"
          />
        </FormControl>
        <Button
          variant="contained"
          size="large"
          type="submit"
          startIcon={<PetsIcon />}
        >
          Envoyer
        </Button>
      </Box>
      <Dialog open={showPopup} onClose={handleClosePopup}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Votre message a bien été envoyé !
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog open={showPopup2} onClose={handleClosePopup2}>
        <DialogTitle>Echec</DialogTitle>
        <DialogContent>
          <DialogContentText>Veuillez Réessayer !</DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Contact;

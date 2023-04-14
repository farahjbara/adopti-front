import * as React from "react";
import Box from "@mui/material/Box";

import { useAnimalStore } from "../../../store/useStore";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import "./Card.css";
import HeartIcon from "../../../assets/icons/HeartIcon.svg";
import UnfilledHeartIcon from "../../../assets/icons/UnfilledHeartIcon.svg";
import { useValue } from "../../../context/ContextProvider";

import { useNavigate } from "react-router";
import api from "../../../services/api";

export default function MediaCard({ data }) {
  const {
    state: { openRegister },
    dispatch,
  } = useValue();
  const loggedIn = localStorage.getItem("logged_in");
  const [showPopup, setShowPopup] = React.useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = (event) => {
    setShowPopup(false);
  };

  const [clicked, setClicked] = React.useState(false);
  const handleClick = (event) => {
    if (loggedIn) {
      setClicked(!clicked);
    } else {
      handleOpenPopup();
      // event.stopPropagation();
    }
  };

  // the data.age is a number of months, so we need to convert it to years and months
  const ageInYears = Math.floor(data.age / 12);
  const ageInMonths = data.age % 12;

  // if the age is less than a year, we only show the months
  // if the age is more than a year, we show both years and months, but we only show the months if they are not 0
  //const age = ageInYears > 0 ? `${ageInYears} ans  ${ageInMonths > 0 ? "et"+ageInMonths + "mois" : ""}` : `${ageInMonths} months`;
  const age =
    ageInYears === 0
      ? `${ageInMonths} mois`
      : ageInYears === 1
      ? `${ageInYears} an`
      : `${ageInYears} ans`;

  const form = { animal: { id: data.id }, user: { id: 33 } };

  const animalStore = useAnimalStore();
  const handleCardClick = async () => {
    const response = await api.post("/view/view", form);
    animalStore.setAnimalId(data.id);
    localStorage.setItem("animalId", data.id);
    window.location.href = "/animaldetail/";
  };

  return (
    <div className="card">
      <div className="card-img" onClick={handleCardClick}>
        <img src={data.imageUrl1} className="image" alt="image" />
      </div>
      {clicked ? (
        <Box className="icon-holder" onClick={handleClick}>
          <img src={HeartIcon} className="icon" alt="icon" />
        </Box>
      ) : (
        <Box className="icon-holder" onClick={handleClick}>
          <img src={UnfilledHeartIcon} className="icon" alt="icon" />
        </Box>
      )}
      <div className="card-content" onClick={handleCardClick}>
        <h2 className="card-title">{data.name}</h2>
        {data.association ? (
          <p className="card-description">{data.association.name}</p>
        ) : (
          <div>
            <br />
          </div>
        )}
        <div className="tags-animals">
          <div className="tag1">
            <p className="tag-text1">{data.gender}</p>
          </div>
          <div className="tag2">
            <p className="tag-text2">{age}</p>
          </div>
          <div className="tag3">
            <p className="tag-text3">{data.address}</p>
          </div>
        </div>
      </div>
      <Dialog open={showPopup} onClose={handleClosePopup}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "401px",
            height: "277px",
          }}
        >
          <IconButton
            style={{ position: "absolute", top: "0%", right: "0%" }}
            onClick={handleClosePopup}
          >
            <CancelRoundedIcon color="primary" />
          </IconButton>
          <p
            style={{
              fontWeight: "400",
              fontSize: "20px",
              fontStyle: "normal",
              textAlign: "center",
              color: "#272626",
              width: "257px",
            }}
          >
            Vous devez être connecté afin de pouvoir ajouter cet animal à la
            liste Favoris.
          </p>

          <Button
            onClick={(event) => {
              handleClosePopup();
              // event.stopPropagation();
              dispatch({ type: "OPEN_LOGIN" });
            }}
            color="primary"
            variant="contained"
            size="large"
          >
            Se connecter
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}

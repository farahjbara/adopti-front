import * as React from "react";
import Box from "@mui/material/Box";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useValue } from "../../../context/ContextProvider";

import HeartIcon from "../../../assets/icons/HeartIcon.svg";
import UnfilledHeartIcon from "../../../assets/icons/UnfilledHeartIcon.svg";
import api from "../../../services/api";
import { useAssociationStore } from "../../../store/useStore";

import "../../atoms/Card/Card.css";

export default function AssociationCard({ data }) {
  const {
    state: { openRegister },
    dispatch,
  } = useValue();
  const loggedIn = localStorage.getItem("logged_in");
  const [showPopup, setShowPopup] = React.useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    if (loggedIn) {
      setClicked(!clicked);
    } else {
      setShowPopup(true);
    }
  };

  const [associationData, setAssociationData] = React.useState([]);
  const handleGetAssociations = async () => {
    const response = await api.get("/associations/count/" + data.id);
    setAssociationData(response.data.data);
  };
  React.useEffect(() => {
    handleGetAssociations();
  }, []);

  const nbAnimaux =
    associationData === 1
      ? `${associationData} seul animal`
      : `${associationData} animaux`;

  const associationStore = useAssociationStore();
  const handleCardClick = () => {
    associationStore.setAssociationId(data.id);
    localStorage.setItem("associationId", data.id);
    window.location.href = "/associationdetail/";
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-img">
        <img src={data.imageUrl} className="image" alt="image" />
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
      <div className="card-content">
        <h2 className="card-title">{data.name}</h2>
        {/* <p className="card-description"><br></br></p> */}
        <div className="tags">
          <div className="tag1-association">
            <p className="tag-text1">{nbAnimaux}</p>
          </div>

          <div className="tag3-association">
            <p className="tag-text3">{data.adress}</p>
          </div>
        </div>
      </div>
      <Dialog open={showPopup} onClose={handleClosePopup}>
        <DialogContent>
          Please Login to add this Association to your favorites!
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClosePopup();
              dispatch({ type: "OPEN_LOGIN" });
            }}
            color="primary"
          >
            Login
          </Button>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

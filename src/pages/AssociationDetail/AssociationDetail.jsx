import React from "react";

import { Box, Button, Dialog, TextField } from "@mui/material";
import api from "../../services/api";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "../../components/atoms/Card/Card";
import associationPage from "../../assets/associationPage.svg";

import { Link } from "react-router-dom";

//styles
import "./AssociationDetailStyle.css";

const AssociationDetail = () => {
  const [associationData, setAssociationData] = React.useState([]);
  const handleGetAssociation = async () => {
    const response = await api.get(
      "/associations/" + localStorage.getItem("associationId")
    );
    setAssociationData(response.data.data);
  };
  React.useEffect(() => {
    handleGetAssociation();
  }, []);

  const [petData, setPetData] = React.useState([]);
  const handleGetPet = async () => {
    const response = await api.get(
      "/animals/" + localStorage.getItem("associationId") + "/animals"
    );
    setPetData(response.data.data);
  };
  React.useEffect(() => {
    handleGetPet();
  }, []);

  const [nbAnimalsData, setNbAnimalsData] = React.useState([]);
  const handleGetNbAnimals = async () => {
    const response = await api.get(
      "/associations/count/" + localStorage.getItem("associationId")
    );
    setNbAnimalsData(response.data.data);
  };
  React.useEffect(() => {
    handleGetNbAnimals();
  }, []);

  const nbAnimaux =
    nbAnimalsData === 1
      ? `${nbAnimalsData} seul animal`
      : `${nbAnimalsData} animaux`;

  const [showPopup, setShowPopup] = React.useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = (event) => {
    setShowPopup(false);
  };

  const [showForm, setShowForm] = React.useState(false);

  return (
    <Box
      sx={{
        mx: 16,
        marginBottom: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <h5 style={{ fontSize: "16px", color: "#828282" }}>
          Home {">"} Associations {">"}{" "}
        </h5>
        <h5>détails</h5>
      </div>
      <Box
        sx={{
          marginTop: -2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Box
          component="img"
          src={associationData.imageUrl}
          sx={{ height: "500px", width: "500px" }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
            height: "500px",
            mr: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <div className="association">{associationData.name}</div>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <Box className="tags-box1">
                <p className="tags-text1"> {nbAnimaux}</p>
              </Box>

              <Box className="tags-box2">
                <p className="tags-text2">
                  {associationData.city} , {associationData.gouvernement}
                </p>
              </Box>
            </Box>
            <div className="description-association">à propos</div>
            <div className="description-text-association">
              {associationData.about}
            </div>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<FavoriteIcon />}
              style={{
                height: "58px",
                width: "220px",
                borderRadius: "10px",
                borderColor: "#272626",
              }}
            >
              <p className="favorite-text"> Ajouter au favoris</p>
            </Button>

            <Button
              variant="contained"
              size="large"
              startIcon={<PetsIcon />}
              style={{ height: "58px", width: "411px", borderRadius: "10px" }}
              onClick={handleOpenPopup}
            >
              <p className="adopti-text">Nous contacter </p>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <p className="titre-animaux">Liste des animaux</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "0px",
          mx: "-16px",
        }}
      >
        {petData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Box>
      <Box marginBottom="48px" marginTop="48px">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div className="text-image"> Aidez nos animaux !</div>
          <div className="text-image2" style={{ marginTop: "-18px" }}>
            Adoptez un de nos animaux ou offrez les des croquettes.
          </div>
          <Link to="/Contact">
            <Button
              variant="contained"
              size="large"
              className="contact"
              startIcon={<PetsIcon />}
            >
              Contactez-nous
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            component="img"
            src={associationPage}
            marginTop="-96px"
            marginBottom="-48px"
          />
        </Box>
      </Box>

      <Dialog open={showPopup} onClose={handleClosePopup}>
        <Box className="adopti-dialog">
          <Box className="adopti-dialog-box">
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "16px",
                marginBottom: "-24px",
              }}
            >
              <PetsIcon sx={{ ml: "48px" }} />
              <p className="adopti-dialog-title"> Adopti</p>
            </Box>
            <Box
              component="img"
              src={associationData.imageUrl}
              sx={{
                borderRadius: "27px",
                height: "375px",
                width: "308px",
                margin: 0,
              }}
            ></Box>
            <p className="adopti-dialog-title"> {associationData.name} </p>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <Box className="dialog-tags-box1">
                <p className="tags-text1"> {nbAnimaux}</p>
              </Box>
              <Box className="dialog-tags-box2">
                <p className="tags-text2">
                  {associationData.city} , {associationData.gouvernement}
                </p>
              </Box>
            </Box>
          </Box>

          <Box className="adopti-dialog-box2">
            <p>Contacter l'association par</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                my: "24px",
              }}
            >
              <Button
                className="form-button"
                variant={showForm ? "outlined" : "contained"}
                onClick={() => setShowForm(false)}
                color="yellow"
              >
                {" "}
                télephone
              </Button>
              <Button
                className="form-button"
                variant={showForm ? "contained" : "outlined"}
                onClick={() => setShowForm(true)}
                color="yellow"
              >
                {" "}
                Message
              </Button>
            </Box>
            {!showForm ? (
              <Box>
                <p> {associationData.name}</p>
                <p>
                  {" "}
                  {associationData.about ? (
                    associationData.about.substring(0, 250)
                  ) : (
                    <div>description de l'association ici</div>
                  )}
                </p>
                <Box className="tags-box">
                  <p className="tags-text"> {associationData.rna}</p>
                </Box>
              </Box>
            ) : (
              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  id="name"
                  label="Votre nom"
                  type="text"
                  size="small"
                  inputProps={{
                    pattern: "[A-Za-z]{3,20}",
                    title:
                      "Name must be 3-20 characters long and only contain letters",
                  }}
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
                />
                <TextField
                  margin="dense"
                  variant="outlined"
                  id="message"
                  label="Votre message"
                  type="text"
                  multiline
                  rows={11}
                />
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PetsIcon />}
                >
                  Envoyer
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default AssociationDetail;

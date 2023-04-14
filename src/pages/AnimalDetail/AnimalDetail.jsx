import React from "react";

import { Box, Button, Dialog, TextField } from "@mui/material";

import { useAnimalStore } from "../../store/useStore";
import api from "../../services/api";
import Card from "../../components/atoms/Card/Card";
import { Link } from "react-router-dom";

import AnimalDetailDesign from "../../assets/AnimalDetailDesign.svg";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FishImage from "../../assets/FishImage.svg";

//styles
import "./AnimalDetailStyle.css";

const AnimalDetail = (props) => {
  const animalStore = useAnimalStore((state) => state.animalId);

  const [animalData, setanimalData] = React.useState([]);
  const [associationData, setAssociationData] = React.useState([]);
  const [associationId, setAssociationId] = React.useState("11");
  const handleGetanimal = async () => {
    const response = await api.get(
      "/animals/findById/" + localStorage.getItem("animalId")
    );
    setanimalData(response.data.data);
    setAssociationData(response.data.data.association);
    setAssociationId(response.data.data.association.id);
  };
  React.useEffect(() => {
    handleGetanimal();
  }, []);

  const [animalAge, setAnimalAge] = React.useState("");
  const [animalVaccine, setAnimalVaccine] = React.useState("");
  React.useEffect(() => {
    const ageInYears = Math.floor(animalData.age / 12);
    const ageInMonths = animalData.age % 12;
    const age =
      ageInYears === 1
        ? `${ageInYears} an  ${ageInMonths > 0 ? `et ${ageInMonths} mois` : ""}`
        : ageInYears > 1
        ? `${ageInYears} ans  ${
            ageInMonths > 0 ? `et ${ageInMonths} mois` : ""
          }`
        : `${ageInMonths} mois`;
    setAnimalAge(age);

    const vaccine = animalData.isActive === true ? "Vacciné" : "Non Vacciné";
    setAnimalVaccine(vaccine);
  }, [animalData]);

  const [sameAssociationAnimalData, setSameAssociationAnimalData] =
    React.useState([]);
  const handleGetSameAssociationAnimal = async () => {
    const response = await api.get("/animals/" + associationId + "/animals");
    setSameAssociationAnimalData(response.data.data);
  };
  React.useEffect(() => {
    //set timeout inside the useeffect hook
    setTimeout(() => {}, 1000);
    handleGetSameAssociationAnimal();
  }, [associationData]);

  const [viewRecentlyData, setViewRecentlyData] = React.useState([]);
  const handleGetViewRecently = async () => {
    const response = await api.get("/view/recently-seen?userId=33");
    setViewRecentlyData(response.data.data);
  };
  React.useEffect(() => {
    //set timeout inside the useeffect hook
    // setTimeout(() => {
    // }, 1000);
    handleGetViewRecently();
  }, [associationData]);

  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (event) => {
    setSelectedImage(event.target.src);
  };

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
          Home {">"} Categories {">"}{" "}
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Box
            component="img"
            src={animalData.imageUrl1}
            sx={{ borderRadius: "27px", height: "120px", width: "120px" }}
            onClick={handleImageClick}
            className={
              selectedImage === animalData.imageUrl1 ? "selected" : "unselected"
            }
          ></Box>
          <Box
            component="img"
            src={animalData.imageUrl2}
            sx={{ borderRadius: "27px", height: "120px", width: "120px" }}
            onClick={handleImageClick}
            className={
              selectedImage === animalData.imageUrl2 ? "selected" : "unselected"
            }
          ></Box>
          <Box
            component="img"
            src={animalData.imageUrl3}
            sx={{ borderRadius: "27px", height: "120px", width: "120px" }}
            onClick={handleImageClick}
            className={
              selectedImage === animalData.imageUrl3 ? "selected" : "unselected"
            }
          ></Box>
          <Box
            component="img"
            src={animalData.imageUrl4}
            sx={{ borderRadius: "27px", height: "120px", width: "120px" }}
            onClick={handleImageClick}
            className={
              selectedImage === animalData.imageUrl4 ? "selected" : "unselected"
            }
          ></Box>
        </Box>
        <Box
          component="img"
          src={selectedImage || animalData.imageUrl1}
          sx={{ height: "590px" }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
            height: "590px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <div className="animal-name">{animalData.name}</div>
            <div className="association-name">{associationData.name}</div>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <Box className="tags-box">
                <p className="tags-text"> {animalData.gender}</p>
              </Box>
              <Box className="tags-box">
                <p className="tags-text"> {animalAge}</p>
              </Box>
              <Box className="tags-box">
                <p className="tags-text"> {animalData.weight} Kg</p>
              </Box>
              <Box className="tags-box">
                <p className="tags-text">
                  {" "}
                  {animalData.address} , {animalData.region}
                </p>
              </Box>
              <Box className="tags-box">
                <p className="tags-text"> {animalVaccine}</p>
              </Box>
            </Box>
            <div className="description-text">à propos</div>
            <div className="animal-description">{animalData.about}</div>
            <div className="description-text">Caractéristiques</div>
            <div className="animal-description">
              {animalData.characteristics}
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
              style={{ height: "58px", width: "286px", borderRadius: "10px" }}
              onClick={handleOpenPopup}
            >
              <p className="adopti-text">Adopti </p>
            </Button>
          </Box>
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
          <p className="title-text">De la meme association</p>
          <Link to="/Categories">
            <Button
              variant="outlined"
              size="large"
              style={{ height: "58px", width: "220px", borderRadius: "10px" }}
            >
              Voir tout
            </Button>
          </Link>
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
          {sameAssociationAnimalData ? (
            sameAssociationAnimalData.map(
              (item) => item && <Card key={item.id} data={item} />
            )
          ) : (
            <p>Loading</p>
          )}
        </Box>
      </Box>
      <Box>
        <Box marginBottom="48px" marginTop="48px">
          <div className="text-over-image">
            {" "}
            Trouvez l'animal qui vous convient et sauvez une vie
          </div>
          <Link to="/Contact">
            <Button variant="contained" size="large" className="contact-button">
              Contactez-nous
            </Button>
          </Link>
          <Box component="img" src={FishImage} marginTop="-96px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="title-text">vu récemment</p>
          <Link to="/Categories">
            <Button
              variant="outlined"
              size="large"
              style={{ height: "58px", width: "220px", borderRadius: "10px" }}
            >
              Voir tout
            </Button>
          </Link>
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
          {viewRecentlyData.map((item) => (
            <Card key={item.animal.id} data={item.animal} />
          ))}
        </Box>
      </Box>
      <Box></Box>
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
              src={animalData.imageUrl1}
              sx={{
                borderRadius: "27px",
                height: "375px",
                width: "308px",
                margin: 0,
              }}
            ></Box>
            <p className="adopti-dialog-title"> {animalData.name} </p>
            <p className="adopti-dialog-association"> {associationData.name}</p>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <Box className="dialog-tags-box1">
                <p className="tags-text1"> {animalData.gender}</p>
              </Box>
              <Box className="tags-box3">
                <p className="tags-text3"> {animalAge}</p>
              </Box>
              <Box className="dialog-tags-box2">
                <p className="tags-text2">
                  {animalData.address} , {animalData.region}
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
            title: "Name must be 3-20 characters long and only contain letters",
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
        <Button variant="contained" size="large" startIcon={<PetsIcon />}>
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

export default AnimalDetail;

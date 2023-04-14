import React from "react";
import { Box, display, fontWeight } from "@mui/system";
import CatIcon from "../../assets/icons/CatIcon.svg";
import DogIcon from "../../assets/icons/DogIcon.svg";
import BirdIcon from "../../assets/icons/BirdIcon.svg";
import FishIcon from "../../assets/icons/FishIcon.svg";
import RabbitIcon from "../../assets/icons/RabbitIcon.svg";
import api from "../../services/api";
import Card from "../../components/atoms/Card/Card";
import RegionBox from "./RegionBox";
import CategorieBox from "./CategorieBox";
import AgeSlider from "./AgeBox";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const AnimalsPage = () => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsYWFAZ21haWwuY29tIiwiaWF0IjoxNjgwMTcyMDUyLCJleHAiOjE2ODAyNTg0NTJ9.nl-Z_C_Ays37OwyS5sVWhUrRg6gwmn1FtbJliBM7sJc",
    },
  };
  const [animalData, setAnimalData] = React.useState([]);
  const handleGetPets = async () => {
    const response = await api.get("/animals/recent", config);
    setAnimalData(response.data.data);
  };

  React.useEffect(() => {
    handleGetPets();
  }, []);
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
        <h5 style={{ fontSize: "16px", color: "#828282" }}>Home {">"} </h5>
        <h5>Categories</h5>{" "}
      </div>
      <Box
        sx={{ marginTop: -2, display: "flex", justifyContent: "space-between" }}
      >
        <Box component="img" src={CatIcon} maxHeight="10rem" />
        <Box component="img" src={DogIcon} maxHeight="10rem" />
        <Box component="img" src={BirdIcon} maxHeight="10rem" />
        <Box component="img" src={FishIcon} maxHeight="10rem" />
        <Box component="img" src={RabbitIcon} maxHeight="10rem" />
      </Box>
      <h1>Liste des Animaux</h1>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            gap: "16px",
            minWidth: "220px",
          }}
        >
          <Box sx={{ border: "1px solid #DEDEDE", borderRadius: "18px" }}>
            <Box borderBottom="1px solid #DEDEDE">
              <h3 style={{ fontSize: "20px", margin: "16px" }}>CATEGORIES</h3>
            </Box>
            <CategorieBox />
          </Box>
          <Box sx={{ border: "1px solid #DEDEDE", borderRadius: "18px" }}>
            <Box borderBottom="1px solid #DEDEDE">
              <h3 style={{ fontSize: "20px", margin: "16px" }}>Age</h3>
            </Box>
            <AgeSlider />
          </Box>
          <Box sx={{ border: "1px solid #DEDEDE", borderRadius: "18px" }}>
            <Box borderBottom="1px solid #DEDEDE">
              <h3 style={{ fontSize: "20px", margin: "16px" }}>Genre</h3>
            </Box>
            <Box className="test" margin='16px'>
            <FormGroup >
              <FormControlLabel
                control={
                  <Checkbox
                    name="allSelect"
                    sx={{
                      color: "primary.main",
                      "&.Mui-checked": {
                        color: "primary.main",
                      },
                    }}
                    defaultChecked
                  />
                }
                required
                label="Male"
              /><FormControlLabel
              control={
                <Checkbox
                  name="allSelect"
                  sx={{
                    color: "primary.main",
                    "&.Mui-checked": {
                      color: "primary.main",
                    },
                  }}
                />
              }
              required
              label="Female"
            />
            </FormGroup></Box>
          </Box>
          <Box sx={{ border: "1px solid #DEDEDE", borderRadius: "18px" }}>
            <Box borderBottom="1px solid #DEDEDE">
              <h3 style={{ fontSize: "20px", margin: "16px" }}>REGION</h3>
            </Box>
            <RegionBox />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: "3",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {animalData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AnimalsPage;

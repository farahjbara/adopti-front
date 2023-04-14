import React from "react";
import api from "../../services/api";
import { Box } from "@mui/system";
import AssociationCard from "../../components/molecules/AssociationCard";

import PinkSearchIcon from "../../assets/icons/PinkSearchIcon.svg";

const Associations = () => {
    let config = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsYWFAZ21haWwuY29tIiwiaWF0IjoxNjgwMTcyMDUyLCJleHAiOjE2ODAyNTg0NTJ9.nl-Z_C_Ays37OwyS5sVWhUrRg6gwmn1FtbJliBM7sJc",
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
        <h5>Associations</h5>{" "}
      </div>

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          gap: "16px",
          minWidth: "240px",
        }}
      >


        <Box sx={{ border: "1px solid #DEDEDE", borderRadius: "18px" }}>
          <Box borderBottom="1px solid #DEDEDE">
            <h3 style={{ fontSize: "20px", margin: "16px" }}>REGION</h3>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', margin:'16px', gap:2}}>
              <Box border="1px solid #DEDEDE" borderRadius="18px">
              <Box
              component="img"
              alt="SearchIcon"
              src={PinkSearchIcon}
              borderRight="1px solid #DEDEDE"
              sx={{ padding: "8px" }}
            />
              </Box>
              <Box border="1px solid #DEDEDE" borderRadius="18px">
              <Box
              component="img"
              alt="SearchIcon"
              src={PinkSearchIcon}
              borderRight="1px solid #DEDEDE"
              sx={{ padding: "8px" }}
            />
              </Box>
          </Box>
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
        {associationData.map((item) => (
          <AssociationCard key={item.id} data={item} />
        ))}
      </Box>
    </Box>
  </Box>
);
};


export default Associations;
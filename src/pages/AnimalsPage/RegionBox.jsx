import React, { useEffect, useState } from "react";

import { Box, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

import "./style.css";


const userData = [
  { name: "Sousse" },
  { name: "Monastir" },
  { name: "Tunis" },
  { name: "Bizerte" },
  { name: "Nabeul" },
  { name: "Sousse" },
  { name: "Monastir" },
  { name: "Tunis" },
  { name: "Bizerte" },
  { name: "Nabeul" },
];

const RegionBox = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <Box className="test" margin='16px'>
    <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="allSelect"
                  sx={{
                    color: "primary.main",
                    '&.Mui-checked': {
                    color: "primary.main",
                     },
                   }}
                  defaultChecked
                  checked={!users.some((user) => user?.isChecked !== true)}
                    onChange={handleChange} 
               />
              }
              required
              label="Toutes"
            />
            {users.map((user, index) => (
                <FormControlLabel
                  key={index}
                    control={
                        <Checkbox
                            name={user.name}
                            sx={{
                                color: "primary.main",
                                '&.Mui-checked': {
                                color: "primary.main",
                                 },
                               }}
                            checked={user?.isChecked || false}
                            onChange={handleChange}
                        />
                    }
                    label={user.name}
                />
            ))}
          </FormGroup>
    </Box>
  );
};

export default RegionBox;

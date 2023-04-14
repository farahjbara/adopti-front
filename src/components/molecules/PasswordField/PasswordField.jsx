import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const PasswordField = ({
  passwordRef,
  id = "password",
  label = "Mot de passe",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <TextField
      margin="dense"
      variant="outlined"
      id={id}
      label={label}
      type={showPassword ? "text" : "password"}
      size="small"
      inputRef={passwordRef}
      inputProps={{
        pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
        title:
          "Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter"
      }}      required
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;

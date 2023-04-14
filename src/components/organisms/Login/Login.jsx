import * as React from "react";
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
} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useValue } from "../../../context/ContextProvider";
import PasswordField from "../../molecules/PasswordField";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// import GoogleButton from "../../atoms/GoogleButton/GoogleButton";

import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

//assets
import Logo from "../../../assets/logo/Logo.svg";
import style from "./Login.styles";
import FacebookIcon from "@mui/icons-material/Facebook";

//hooks
import { useAuthStore, useLoggedInStore } from "../../../store/useStore";
import api from "../../../services/api";

//styles
import "./LoginStyle.css";

import jwt_decode from "jwt-decode";

const Login = () => {
  var responseGoogle = "";
  const responseFacebook = (response) => {
    console.log(response);
  };
  const {
    state: { openLogin },
    dispatch,
  } = useValue();

  const LoggedIn = useLoggedInStore((state) => state.login);
  const setAuthData = useAuthStore((state) => state.setAuthData);

  const nameRef = useRef();
  const passwordRef = useRef();

  const handleClose = () => {
    dispatch({ type: "CLOSE_LOGIN" });
  };

  const [errrorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  //mrama
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  //

  const handleSubmit = async (event) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      event.preventDefault();
      const form = {
        email: nameRef.current.value,
        password: passwordRef.current.value,
      };
      try {
        const { data } = await api.post("/auth/login", form);
        console.log("data================", data);
        if (data.data.statusCode === parseInt("401")) {
          setErrorMessage(data.message);
          console.log("//////////////////////");
          console.log(errrorMessage);
        } else {
          localStorage.setItem("username", data.data.name);
          localStorage.setItem("id", data.data.AccountId);
          localStorage.setItem("accessToken", data.data.access_token);
          localStorage.setItem("picture", data.data.pictureUrl);
          localStorage.setItem("data", JSON.stringify(data.data));
          localStorage.setItem("AuthData", JSON.stringify(data.data));
          setSuccess(true);
          setLoading(false);
          // sleep 1 second
          await new Promise((r) => setTimeout(r, 1000));
          handleClose();
          LoggedIn();
          navigate("/");
        }
      } catch (err) {
        console.log("error:  ", err);
        // sleep 1 second
        await new Promise((r) => setTimeout(r, 1000));
        setShowPopup(true);
        setSuccess(false);
        setLoading(false);
      }
    }
  };

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const buttonSx = {
    display: "flex",
    //alignItems: "stretch",
    background: "#E2168C",
    width: "90%",
    "&:hover": {
      background: "#E2168C",
    },
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };
  const fbSx = {
    display: "flex",
    //alignItems: "stretch",
    background: "#3B5998",
    marginBottom: "1rem",
    width: "100%",
    "&:hover": {
      background: "#3B5998",
    },
  };

  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle textAlign="center">
        <Box component="img" sx={style.logo} alt="Logo" src={Logo} />
        <IconButton sx={style.closeButton} onClick={handleClose}>
          <CancelRoundedIcon />
        </IconButton>
      </DialogTitle>

      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent sx={style.dialogContent}>
          <DialogContentText sx={style.dialogContentText} textAlign="center">
            Ravis de te revoir!
          </DialogContentText>

          <TextField
            margin="normal"
            variant="outlined"
            id="email"
            label="Email"
            type="email"
            size="small"
            inputRef={nameRef}
            inputProps={{
              type: "email",
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
              title: "Invalid email address",
            }}
            required
          />
          <PasswordField {...{ passwordRef }} />
        </DialogContent>
        <DialogActions sx={style.dialogActions}>
          <Button
            type="submit"
            variant="contained"
            sx={buttonSx}
            disabled={loading}
          >
            Se connecter
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "55%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </DialogActions>
        <DialogContent>
          <FacebookLogin
            render={(renderProps) => (
              <Button
                sx={fbSx}
                variant="contained"
                onClick={renderProps.onClick}
                startIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
            )}
            appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
            autoLoad={false}
            size="small"
            fields="name,email,picture"
            callback={async (credentialResponse) => {
              console.log(credentialResponse);
              localStorage.setItem(
                "AuthData",
                JSON.stringify(credentialResponse)
              );
              localStorage.setItem(
                "accessToken",
                credentialResponse.accessToken
              );
              localStorage.setItem("username", credentialResponse.name);
              localStorage.setItem(
                "picture",
                credentialResponse.picture.data.url
              );
              localStorage.setItem("id", credentialResponse.id);
              handleClose();
              LoggedIn();
              const form = { email: credentialResponse.email };
              const { data } = await api.post(
                "/users/email?email=" + credentialResponse.email
              );
              if (data.data) {
                navigate("/");
              } else {
                navigate("/userDashboard");
              }
            }}
          ></FacebookLogin>

          <Box sx={{display: 'flex', justifyContent:'center'}}>
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            >
              <GoogleLogin
              
                className="google-login"
                text="continue_with"
                shape="pill"
                width="100%"
                size="large"
                cancel_on_tap_outside={true}
                itp_support={false}
                onSuccess={async (credentialResponse) => {
                  console.log(jwt_decode(credentialResponse.credential));
                  responseGoogle = jwt_decode(credentialResponse.credential);
                  localStorage.setItem(
                    "AuthData",
                    JSON.stringify(responseGoogle)
                  );
                  //localStorage.setItem("accessToken", responseGoogle.accessToken);
                  localStorage.setItem("username", responseGoogle.name);
                  localStorage.setItem("picture", responseGoogle.picture);
                  localStorage.setItem("id", responseGoogle.sub);
                  handleClose();
                  LoggedIn();
                  const form = { email: responseGoogle.email };
                  const { data } = await api.post(
                    "/users/email?email=" + responseGoogle.email
                  );
                  if (data.data) {
                    navigate("/");
                  } else {
                    navigate("/userDashboard");
                  }
                  //  const { data } = await api.post(
                  //    "/auth/login", );
                  //  localStorage.setItem("AuthData", JSON.stringify(data));
                  //  setAuthData(data);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </Box>
        </DialogContent>
        <DialogContent sx={style.bottomDialogContent}>
          Pas de compte?
          <DialogContent
            sx={style.redirectText}
            onClick={() => {
              handleClose();
              dispatch({ type: "OPEN_REGISTER" });
            }}
          >
            créez-en un
          </DialogContent>
        </DialogContent>
      </Box>
      <Dialog
        open={showPopup}
        onClose={handleClosePopup}
        style={{ zIndex: 1500 }}
      >
        <DialogTitle>Form Submission Error</DialogTitle>
        <DialogContent>Please enter a valid email and password</DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default Login;

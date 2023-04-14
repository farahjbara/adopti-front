// import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
// import Button from "@mui/material/Button";
// import jwt_decode from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import { useLoggedInStore } from "../../../store/useStore";
// import api from "../../../services/api";


// function GoogleButton() {

//     let navigate = useNavigate();
//     const LoggedIn = useLoggedInStore((state) => state.login);

//     const  signIn  = useGoogleLogin({
//       clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//       onSuccess: async (credentialResponse) => {
//         console.log(credentialResponse.access_token);
//         console.log(jwt_decode(credentialResponse.access_token));
//         responseGoogle = jwt_decode(credentialResponse.credential);
//         localStorage.setItem(
//           "AuthData",
//           JSON.stringify(responseGoogle)
//         );
//         //localStorage.setItem("accessToken", responseGoogle.accessToken);
//         localStorage.setItem("username", responseGoogle.name);
//         localStorage.setItem("picture", responseGoogle.picture);
//         localStorage.setItem("id", responseGoogle.sub);
//         // handleClose();
//         LoggedIn();
//         const form = { email: responseGoogle.email };
//         const { data } = await api.post(
//           "/users/email?email=" + responseGoogle.email
//         );
//         if (data.data) {
//           navigate("/");
//         } else {
//           navigate("/userDashboard");
//         }
//         //  const { data } = await api.post(
//         //    "/auth/login", );
//         //  localStorage.setItem("AuthData", JSON.stringify(data));
//         //  setAuthData(data);
//       } 
// },

//     );
  
//     const handleButtonClick = () => {
//       signIn();
//     };
  
//     return (

//       <Button onClick={handleButtonClick}>
//         Login with Google
//       </Button>
//     );
//   }

//   export default GoogleButton;
  


// //   <GoogleOAuthProvider
// //   clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
// // >


// //   <GoogleLogin

// //     text="continue_with"
// //     shape="pill"
// //     width="100%"
// //     size="large"
// //     cancel_on_tap_outside={true}
// //     itp_support={false}


    
// //     onSuccess={async (credentialResponse) => {
// //       console.log(jwt_decode(credentialResponse.credential));
// //       responseGoogle = jwt_decode(credentialResponse.credential);
// //       localStorage.setItem(
// //         "AuthData",
// //         JSON.stringify(responseGoogle)
// //       );
// //       //localStorage.setItem("accessToken", responseGoogle.accessToken);
// //       localStorage.setItem("username", responseGoogle.name);
// //       localStorage.setItem("picture", responseGoogle.picture);
// //       localStorage.setItem("id", responseGoogle.sub);
// //       handleClose();
// //       LoggedIn();
// //       const form = { email: responseGoogle.email };
// //       const { data } = await api.post(
// //         "/users/email?email=" + responseGoogle.email
// //       );
// //       if (data.data) {
// //         navigate("/");
// //       } else {
// //         navigate("/userDashboard");
// //       }
// //       //  const { data } = await api.post(
// //       //    "/auth/login", );
// //       //  localStorage.setItem("AuthData", JSON.stringify(data));
// //       //  setAuthData(data);
// //     }}
// //     onError={() => {
// //       console.log("Login Failed");
// //     }}
// //   />
// // </GoogleOAuthProvider>
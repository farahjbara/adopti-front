const style = {
  logo: {
    paddingTop: ".5rem",
    height: "4rem",
  },
  closeButton: {
    position: "absolute",
    top: '1rem',
    right: '1rem',
    color: "#E2168C",
  },
  dialogContent: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    wrap: "1",
    //alignItems: "center",
  },
  dialogContentText: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    wrap: "1",
    my: "-1rem",
    // mx:'-1rem'
  },
  dialogActions: {
    display: "flex",
    justifyContent: "center",
    
  },
  dialogConditions: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "85%",
  },
  button: {
    display: "flex",
    alignItems: "stretch",
    background: "#E2168C",
    width: "85%",
    "&:hover": {
      background: "#E2168C",
    },
   marginTop:'-2rem',
   marginBottom:'-1rem'
  },
  bottomDialogContent: {
    display: "flex",
    flexDirection: "column",
    wrap: "1",
    alignItems: "center",
    color: "#828282",
   
  },
  redirectText: {
    color: "#E2168C",
    cursor: "pointer",
    fontWeight: "bold",
    my:'-.5rem'
  },
  radioGroup: {
    display: "flex",
    flexDirection: "raw",
    alignItems: "center",
    justifyContent: "center",
    my: "-1rem",
  },
  marginRight: {
    mr: 0.5,
  },
};
export default style;

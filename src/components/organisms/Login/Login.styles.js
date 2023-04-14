const style = {
  logo: {
    paddingTop: "2rem",
    height: "4rem",
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    color: "#E2168C",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    wrap: "1",
  },
  dialogContentText: { fontWeight: "bold", color: "black" },
  dialogActions: {
    display: "flex",
    flexDirection: "column",
    // gap: "1rem",
  },

  button: {
    display: "flex",
    //alignItems: "stretch",
    background: "#E2168C",
    width: "90%",
    "&:hover": {
      background: "#E2168C",
    },
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

  },
  social: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  }
};
export default style;

const style = {
  root: {
    display: "flex",
    justifyContent: "center",
    "& > :not(style)": {
      m: 4,
      px: 2,
      width: 608,
      height: 608,
      // 783
    },
  },
  cameraIcon: {
    position: "relative",
    bottom:'20%',
    right:'20%',
    background: '#D3D3D3',
    color: "#E2168C",

    '&:hover': {
      background: '#D3D3D3',
    },
  },
  paper: {
    fontWeight: "Bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  image: { width: "128px", borderRadius: "64px", marginBottom: 1 },
  field: { display: "flex", justifyContent: "space-between" },
  bottomField: { display: "flex", justifyContent: "flex-end" },

  form: {
    display: "flex",
    flexDirection: "column",
    wrap: "1",
    my: "-1rem",
    // mx:'-1rem'
  },

  button: {
    background: "#E2168C",
    width: "40%",
    ml: 1,
    "&:hover": {
      background: "#E2168C",
    },
  },
  cancelButton: {
    width: "20%",
  },

  width: {
    width: "45%",
  },
  fullWidth: {
    width: "100%",
  },
};
export default style;

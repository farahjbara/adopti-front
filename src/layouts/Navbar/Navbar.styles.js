const style = {
  logoOnMd: {
    // paddingTop: "1rem",
    pr:"3rem",
    ml: "5rem",
    mr: "5rem",
    height: "2rem",
  },
  logoOnXs: {
    paddingRight: "3rem",
    paddingTop: ".7rem",
    height: "2.5rem",
  },
  icon: {
    padding: "1.5rem",
    my:'-1rem',
    borderLeft: 1,
    borderColor: "#D3D3D3",
    borderBlock: 1,
  },
  appBar: {
    position: "static",
    minHeight: "3.5rem",
    maxHeight: "4rem",
    overflow: "hidden",
    background: "white",
    boxShadow: "none",
    borderBottom: 1,
    borderBottomColor: "#D3D3D3",
  },

  displayOnMd: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
  },
  displayOnXs: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  smallMenu: {
    display: {
      xs: "block",
      md: "none",
    },
  },
  menu:{
    display: {
      xs: "block",
      md: "block",
    }
  },
  boldText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  registerText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFB800",
  },
  displayTextField: {
    fontWeight: "bold",
    my: 2,
    color: "black",
    display: "block",
    textTransform: "none",
  },
  borderLeft: {
    borderLeft: 1,
    borderColor: "#D3D3D3",
  },
  borderRight: {
    borderLeft: 1,
    borderRight: 1,
    borderColor: "#D3D3D3",
  },
  register: {
    fontWeight: "bold",
    my: 2,
    color: "#FFB800",
    textTransform: "none",
  },
  login: {
    fontWeight: "bold",
    my: 2,
    color: "#000000",
    fontweight: "bold",
    textTransform: "none",
  },
  logout: {
    fontWeight: "bold",
    color:"#E2168C",
    textDecoration: "none",
  },
};
export default style;

import { createTheme } from "@mui/material/styles";

// import { css } from '@mui/system';

// const CandyBeansFont = css`
//   @font-face {
//     font-family: 'Candy Beans';
//     src: url('./fonts/candybeans.ttf') format('truetype');
//   }
// `;

const theme = createTheme({
  palette: {
    primary: {
      main: "#E2168C",
    },
    secondary: {
      main: "#E2168C",
    },
    gray: {
      main: "#F7F8FC",
    },
    black: {
      main: "#000000",
    },
    yellow: {
      main: "#FFB800",
      contrastText: "#fff"
    }
  },
  shape: {
    borderRadius: 16,
  },

  typography: {
    allVariants: {
      fontFamily: 'Candy Beans',
      textTransform: 'none',
      //fontSize: 16,
      //fontWeight:'400'
    },
  },

  container_with_scrolls: {
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },

  // fonts: {
  //   body: 'Candy Beans, sans-serif',
  // },
  // styles: {
  //   CandyBeansFont,
  // },

  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: {
  //         body: {
  //           scrollbarColor: "#6b6b6b #2b2b2b",
  //           "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
  //             backgroundColor: "#2b2b2b",
  //           },
  //           "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
  //             borderRadius: 16,
  //             backgroundColor: "#6b6b6b",
  //             minHeight: 24,
  //             border: "3px solid #2b2b2b",
  //           },
  //           "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
  //             backgroundColor: "#959595",
  //           },
  //           "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
  //             backgroundColor: "#959595",
  //           },
  //           "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
  //             backgroundColor: "#959595",
  //           },
  //           "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
  //             backgroundColor: "#2b2b2b",
  //           },
  //         },
  //       },
  //     },
  //   },
});
export default theme;

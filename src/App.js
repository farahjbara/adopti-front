import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Associations from "./pages/Associations";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import UserDashboard from "./pages/UserDashboard";
import AssociationDashboard from "./pages/AssociationDashboard";
import AnimalsPage from "./pages/AnimalsPage";
import AnimalDetail from "./pages/AnimalDetail";
import AssociationDetail from "./pages/AssociationDetail";

import ResponsiveAppBar from "./layouts/Navbar";
import Login from "./components/organisms/Login";
import Register from "./components/organisms/Register";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Footer from "./layouts/Footer";

import "./App.css"

function App() {
  return (
    <div className="App"> 
    <ThemeProvider theme={theme}>
      <Login />
      <Register />
      <ResponsiveAppBar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Associations" element={<Associations />} />
        <Route path="/Categories" element={<AnimalsPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/AssociationDashboard" element={<AssociationDashboard />} />
        <Route path="/AnimalDetail" element={<AnimalDetail />} />
        <Route path="/AssociationDetail" element={<AssociationDetail />} />
      </Routes>
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
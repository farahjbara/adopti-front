import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
};

const Template = (args) => <BrowserRouter><Navbar {...args}/></BrowserRouter> ;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Navbar",
};
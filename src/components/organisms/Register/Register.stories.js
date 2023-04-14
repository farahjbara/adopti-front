import React from "react";
import Register from "./Register";

import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/Register",
  component: Register,
};

const Template = (args) => <BrowserRouter><Register {...args} /></BrowserRouter>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Register",
};
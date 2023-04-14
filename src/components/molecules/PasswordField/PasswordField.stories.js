import React from "react";
import PasswordField from "./PasswordField";

export default {
  title: "molecules/PasswordField",
  component: PasswordField,
};

const Template = (args) => <PasswordField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary PasswordField",
};
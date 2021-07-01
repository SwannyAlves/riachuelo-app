import { React, useContext, useEffect, useState } from "react";
import { render, screen } from "@testing-library/react";
import { MenuItem } from "./Menu";

test("renders learn react link", () => {
  render(<MenuItem label="testeMenuItemLabel" />);
  const linkElement = screen.getByText("testeMenuItemLabel");
  expect(linkElement).toBeInTheDocument();
});

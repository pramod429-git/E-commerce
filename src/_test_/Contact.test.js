const { render, screen } = require("@testing-library/react");
import Contact from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load contact us page", () => {
  render(<Contact />);

  //Quereing
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("should load button in the contact us page", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should load Placeholder name in the contact us page", () => {
  render(<Contact />);

  const name = screen.getByPlaceholderText("Name");

  expect(name).toBeInTheDocument();
});

test("should load textbox in the contactus page", () => {
  render(<Contact />);

  const textbox = screen.getAllByRole("textbox");

  expect(textbox.length).not.toBe(3);
});

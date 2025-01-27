import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("shold render header component with the login page", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByRole("button");

  expect(LoginButton).toBeInTheDocument();
});

test("should render header component with if multiple login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const Sigin = screen.getByRole("button", { name: "Sigin 🤔" });

  fireEvent.click(Sigin);

  const Login = screen.getByRole("button", { name: "Login ✅" });

  fireEvent.click(Login);

  const Logout = screen.getByRole("button", { name: "Logout 🔴" });

  expect(Logout).toBeInTheDocument();
});

test("should render header component with if multiple login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const Sigin = screen.getByText("Sigin 🤔");

  fireEvent.click(Sigin);

  const Login = screen.getByText("Login ✅");

  fireEvent.click(Login);

  const Logout = screen.getByText("Logout 🔴");

  expect(Logout).toBeInTheDocument();
});

test("should render header componet with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

test("should render header componet with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText("Cart - 0 items");

  expect(cart).toBeInTheDocument();
});

import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import ResMenu from "../RestaurantsMenu";
import Cart from "../Cart";
import Mock_res_menu from "../mocks/Mock_res_menu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_res_menu),
  })
);

it("Should render ResMenu with accordion items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <ResMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const showAccordion = screen.getByText("SIDES AND DIPS(8)");

  expect(showAccordion).toBeInTheDocument();

  fireEvent.click(showAccordion);

  const resItem = screen.getAllByTestId("foodItems");

  expect(resItem.length).toBe(8);
});

it("should add the items to the cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const add = screen.getAllByRole("button", { name: "+" });

  console.log(add.length);

  fireEvent.click(add[0]);

  const cartValue = screen.getByText("Cart - 1 items");

  expect(cartValue).toBeInTheDocument();

  fireEvent.click(cartValue);
  fireEvent.click(add[1]);

  const cartValue1 = screen.getByText("Cart - 2 items");

  fireEvent.click(cartValue1);

  const cartItems = screen.getAllByTestId("foodItems");

  const cartEnter = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(cartEnter);

  console.log(cartItems);

  //expect(cartItems.length).toBe(0);

  expect(screen.getByText("No Items available in the Cart")).toBeInTheDocument;

  //   expect(cartItems.length).toBe(10);
});

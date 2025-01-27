const { render, screen } = require("@testing-library/react");
const { default: Body } = require("../Body");
import { act, fireEvent } from "@testing-library/react";
import Mock_ResList from "../mocks/ResCardList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_ResList),
  })
);

it("Should search restaurant for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const BeforeSeachingRes = screen.getAllByTestId("resCard");
  expect(BeforeSeachingRes.length).toBe(20);

  const SearchBtn = screen.getByRole("button", { name: "Search" });
  // expect(SearchBtn).toBeInTheDocument();
  const SearchInput = screen.getByTestId("searchInput");

  fireEvent.change(SearchInput, { target: { value: "burger" } });

  fireEvent.click(SearchBtn);

  const AfterSeachingRes = screen.getAllByTestId("resCard");

  expect(AfterSeachingRes.length).toBe(1);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const BeforeClickTopRatedRestaurants = screen.getAllByTestId("resCard");
  expect(BeforeClickTopRatedRestaurants.length).toBe(20);

  const TopRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(TopRatedBtn);

  const AfterClickTopRatedRestaurants = screen.getAllByTestId("resCard");
  expect(AfterClickTopRatedRestaurants.length).toBe(11);
});

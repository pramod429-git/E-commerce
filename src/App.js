import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";

const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

//root.render(heading);

//root.render(jsxHeading);

//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
//import Grocery from "./components/Grocery";
import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();
  console.log(userName);

  useEffect(() => {
    const data = {
      name: "Pramod",
    };
    setUserName(data.name);
  }, []);
  console.log(userName);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ LoggedInUser: userName, setUserName }}>
        <div className="applayout">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

//root.render(heading);

//root.render(jsxHeading);

//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);

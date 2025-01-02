import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Sigin 🤔");
  const { LoggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  console.log("header called");
  useEffect(() => {
    //console.log("useEffect called");
  }, [btnName]);
  const onlineStatus = useOnlineStatus();
  let content;

  {
    if (btnName === "Sigin 🤔") {
      content = <li className="p-4 m-2 font-bold">Please Sigin</li>;
    } else if (btnName === "Login ✅") {
      content = <li className="p-4 m-2 font-bold">User : {LoggedInUser}</li>;
    } else {
      content = <li className="p-4 m-2 font-bold">Logout</li>;
    }
  }

  return (
    <div className="header flex items-center justify-between shadow-lg bg-orange-300">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex ">
          <li className="p-4 m-2">
            Online Status {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="p-4 m-2 hover:text-blue-500 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-2 hover:text-blue-500 hover:font-bold">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="p-4 m-2 hover:text-blue-500 hover:font-bold">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-4 m-2 hover:text-blue-500 hover:font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 m-2 hover:text-blue-500 hover:font-bold">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <button
            className="login bg-neutral-300 px-2 py-1 rounded-lg m-2 hover:bg-teal-400 hover:shadow-lg hover:border border-solid border-black"
            onClick={() => {
              // if (btnName === "Sigin 🤔") {
              //   setBtnName("Login ✅");
              // } else if (btnName === "Login ✅") {
              //   setBtnName("Logout 🔴");
              // } else {
              //   setBtnName("Sigin 🤔");
              // }
              btnName === "Login ✅"
                ? setBtnName("Logout 🔴")
                : setBtnName("Login ✅");
              //</ul>btnName === "Sigin 🤔"
              //</div>? setBtnName("Login ✅")
              //: setBtnName("Logout 🔴");
              // setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>

          {/* {btnName === "Login ✅" ? (
            <li className="p-4 m-2 font-bold">{user.LoggedInUser}</li>
          ) : (
            <li className="p-4 m-2 font-bold">Logout</li>
          )} */}
          <li>{content}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

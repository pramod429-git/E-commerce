import { createContext } from "react";

const userContext = createContext({
  LoggedInUser: "Default User",
});

export default userContext;

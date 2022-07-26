import { createContext, useState } from "react";
export const AuthContext = createContext({
  token: "",
  firstName: "",
  isAuthenticated: false,
  details: "",
  updateDetails: (info) => {},
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userDetails, setUserDetails] = useState();
  function authenticate(token) {
    setAuthToken(token);
  }
  function logout() {
    setAuthToken(null);
  }
  function updateDetails(info) {
    setUserDetails(info);
  }
  console.log("Context Details", userDetails);
  const value = {
    token: authToken,
    details: userDetails,
    isAuthenticated: !!authToken,
    updateDetails: updateDetails,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

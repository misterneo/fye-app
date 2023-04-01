import { createContext, useEffect, useState } from "react";
import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(false);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setAppLoading(true);

    api
      .get("/user")
      .then((res) => {
        setUser(res.data);
        setAppLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        setAppLoading(false);
      });
  }, []);

  const authenticate = async ({ setErrors, action, ...props }) => {
    setIsLoading(true);
    await delay(1000);

    const endpoint = action === "login" ? "/login" : "/register";

    api
      .post(endpoint, props)
      .then(async (res) => {
        await AsyncStorage.setItem("token", res.data.token);

        setUser(res.data.user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        try {
          setErrors(err.response.data.errors);
        } catch (error) {
          alert("Something went wrong!");
        }
        setIsLoading(false);
      });
  };

  const logout = async () => {
    api
      .post("/logout")
      .then(async (res) => {
        console.log(res.data);
        await AsyncStorage.removeItem("token");

        setUser(false);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, appLoading, authenticate, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

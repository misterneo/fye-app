import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./navigation/AuthStack";
import { useFonts } from "expo-font";
import AppStack from "./navigation/AppStack";
import { AuthContext, AuthProvider } from "./context/AuthContext";

function App() {
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Wrapper />
    </AuthProvider>
  );
}

function Wrapper() {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;

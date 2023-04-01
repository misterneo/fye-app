import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.styles";

function AuthButton({ value, onPress }) {
  return (
    <TouchableOpacity style={{ marginTop: 10 }} onPress={onPress}>
      <View style={globalStyles.authBtnStyle}>
        <Text style={globalStyles.authBtnTextStyle}>
          {value ?? "Don't click here!"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default AuthButton;

import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import logo from "../../assets/images/logo.png";
import { styles } from "./Auth.styles";
import { globalStyles } from "../../styles/global.styles";
import AuthButton from "../../components/AuthButton";
import InputError from "../../components/InputError";

function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = () => {};

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={styles.title}>Welcome to the FYE App</Text>
      <Image source={logo} />

      <View style={styles.inputsContainer}>
        <View>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.inputStyle}
            placeholder="Full name"
          />
          <InputError error={errors.name} />
        </View>

        <View>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputStyle}
            placeholder="Email"
          />
          <InputError error={errors.email} />
        </View>

        <View>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry={true}
          />
          <InputError error={errors.password} />
        </View>

        <View>
          <TextInput
            value={passwordConfirmation}
            onChangeText={(text) => setPasswordConfirmation(text)}
            style={styles.inputStyle}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          <InputError error={errors.password_confirmation} />
        </View>

        <AuthButton value={"Register"} onPress={() => onSubmit()} />

        <View style={styles.alreadyHaveAccountContainer}>
          <Text style={styles.already}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;

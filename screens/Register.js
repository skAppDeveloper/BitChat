import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Context from "../context/Context";
import { SignUp, SignIn } from "../firebase";

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("SignUp");
  const {
    theme: { colors },
  } = useContext(Context);

  function handlePress() {
    if (mode === "SignUp") {
      SignUp(email, password, navigation);
    }
    if (mode === "SignIn") {
      SignIn(email, password, navigation);
    }
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{ color: colors.foreground, fontSize: 24, marginBottom: 20 }}
      >
        Welcome To BitChat
      </Text>
      <Image
        source={require("../assets/welcome-img.png")}
        style={{ width: 180, height: 180, resizeMode: "cover" }}
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 240,
          }}
        />
        <TextInput
          placeholder="Enter Your Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 240,
            marginTop: 20,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            disabled={!email || !password}
            title={mode === "SignUp" ? "Register" : "Login"}
            color={colors.secondary}
            onPress={handlePress}
          />
          <TouchableOpacity
            style={{ marginTop: 15 }}
            onPress={() =>
              mode === "SignUp" ? setMode("SignIn") : setMode("SignUp")
            }
          >
            <Text style={{ color: colors.secondaryText }}>
              {mode === "SignUp"
                ? "Already have an Account? Login"
                : "Don't have an Account? Register"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export { RegisterScreen };

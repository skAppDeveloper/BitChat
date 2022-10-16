import { Alert, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import GlobalContext from "../context/Context";
import { useNavigation } from "@react-navigation/native";
import { removeUserSession } from "../sessionHelper";

export default function Logout() {
  const {
    theme: { colors },
  } = useContext(GlobalContext);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert("Caution!", "Are You Sure?", [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: () => removeUserSession(navigation),
          },
        ]);
      }}
      style={{
        position: "absolute",
        right: 20,
        bottom: 90,
        borderRadius: 60,
        width: 60,
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AntDesign
        name="logout"
        size={30}
        color="black"
        style={{ transform: [{ scaleX: 1 }] }}
      />
    </TouchableOpacity>
  );
}

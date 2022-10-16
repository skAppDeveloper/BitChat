import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  LogBox,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import { useAssets } from "expo-asset";
//import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { RegisterScreen } from "./screens/Register";
import ContextWrapper from "./context/ContextWrapper";
import Context from "./context/Context";
import Profile from "./screens/Profile";
import Chats from "./screens/Chats";
import CalendarComp from "./screens/Calendar";
import Contacts from "./screens/Contacts";
import Chat from "./screens/Chat";
import ChatHeader from "./components/ChatHeader";
import Tracking from "./screens/Tracking";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  "Setting a Timer",
  "AsyncStorage has been extracted from react-native core and will be remove in future release.",
]);

function App() {
  const {
    theme: { colors },
  } = useContext(Context);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.foreground,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: colors.white,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "BitChat", headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ title: "Select Contacts" }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerTitle: () => <ChatHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function Home() {
  const {
    theme: { colors },
  } = useContext(Context);

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.foreground,
        },
      }}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbox-sharp" : "chatbox-outline"}
              size={24}
              color={focused ? "yellow" : "white"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarComp}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={24}
              color={focused ? "yellow" : "white"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Tracking"
        component={Tracking}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-location" : "ios-location-outline"}
              size={24}
              color={focused ? "yellow" : "white"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

function Main() {
  const [assets] = useAssets(
    require("./assets/chatbg.jpg"),
    require("./assets/user-icon.png"),
    require("./assets/icon-square.png"),
    require("./assets/welcome-img.png")
  );
  if (!assets) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <ContextWrapper>
      <App />
    </ContextWrapper>
  );
}

const Splash = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem("@is_user_logged_in")
      .then((value) => {
        if (value !== null) {
          setTimeout(() => {
            navigation.replace("Home");
          }, 3000);
        } else {
          navigation.replace("RegisterScreen");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        flex: 1,
      }}
    >
      <StatusBar style="light" backgroundColor="#710000" />
      <Image
        source={require("./assets/welcome-img.png")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 200,
          marginBottom: 40,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          color: "#E64848",
        }}
      >
        Welcome Here!
      </Text>
    </View>
  );
};

export default Main;

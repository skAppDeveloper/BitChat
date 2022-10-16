import AsyncStorage from "@react-native-async-storage/async-storage";

const saveUserSession = async (value) => {
  try {
    await AsyncStorage.setItem("@is_user_logged_in", value);
  } catch (e) {}
};
export { saveUserSession };

// SignOut Seesion

async function removeUserSession(navigation) {
  try {
    await AsyncStorage.setItem("@is_user_logged_in", "");
    navigation.replace("RegisterScreen");
  } catch (e) {
    //saving error
  }
}
export { removeUserSession };

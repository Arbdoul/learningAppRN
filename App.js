import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeNavigation from "./Apps/Navigation/HomeNavigation";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { client } from "./Apps/Utils/KindConfig";

export const AuthContext = createContext();
export const UserDetailContext = createContext();
export default function App() {
  const [auth, setAuth] = useState(false);
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  const [fontsLoaded, fontError] = useFonts({
    outfit: require("./assets/font/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/font/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/font/Outfit-Bold.ttf"),
    "outfit-semibold": require("./assets/font/Outfit-SemiBold.ttf"),
  });

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      const userProfile = await client.getUserDetails();
      setUserDetail(userProfile);
      setAuth(true);
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
      setAuth(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <NavigationContainer>
            {auth ? <HomeNavigation /> : <LoginScreen />}
          </NavigationContainer>
        </UserDetailContext.Provider>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

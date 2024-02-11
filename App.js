import { NavigationContainer } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import TabNavigation from "./Apps/Navigation/TabNavigation";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { client } from "./Apps/Utils/KindConfig";

export const AuthContext = createContext();
export default function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      const userProfile = await client.getUserDetails();
      setAuth(true);
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
      setAuth(false);
      return <LoginScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <NavigationContainer>
          {auth ? <TabNavigation /> : <LoginScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

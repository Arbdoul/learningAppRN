import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { client } from "./Apps/Utils/KindConfig";

export default function App() {
  useEffect(() => {
    checkAuthenticate();
  }, []);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
      console.log("authenticated");
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };

  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

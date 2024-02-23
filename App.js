import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeNavigation from "./Apps/Navigation/HomeNavigation";
import LoginScreen from "./Apps/Screens/LoginScreen";
import GlobalApi from "./Apps/Utils/GlobalApi";
import { client } from "./Apps/Utils/KindConfig";

export const AuthContext = createContext();
export const UserDetailContext = createContext();
export const MembershipContext = createContext();

export default function App() {
  const [auth, setAuth] = useState(false);
  const [userDetail, setUserDetail] = useState();
  const [isMember, setIsMember] = useState();
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
      checkUserMembership();
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
      setAuth(false);
    }
  };

  //check Membership
  const checkUserMembership = () => {
    GlobalApi.checkUserMembership(userDetail.email).then((resp) => {
      console.log(resp);
      setIsMember(resp.memberships?.length > 0);
    });
  };
  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <MembershipContext.Provider value={{ isMember, setIsMember }}>
            <NavigationContainer>
              {auth ? <HomeNavigation /> : <LoginScreen />}
            </NavigationContainer>
          </MembershipContext.Provider>
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

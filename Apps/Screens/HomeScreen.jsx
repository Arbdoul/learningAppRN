import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../../App";
import { client } from "../Utils/KindConfig";
import Header from "../components/Header";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { auth, setAuth } = useContext(AuthContext);
  const handleLogout = async () => {
    const loggedOut = await client.logout();

    if (loggedOut) {
      setAuth(false);
      navigation.navigate("Profile");
    }
  };
  return (
    <View>
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

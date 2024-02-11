import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../App";
import { client } from "../Utils/KindConfig";

const HomeScreen = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const handleLogout = async () => {
    // With open web in your apps
    const isLoggedOut = await client.logout();

    if (isLoggedOut) {
      setAuth(false);
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

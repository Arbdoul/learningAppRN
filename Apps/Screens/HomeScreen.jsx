import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../../App";
import GlobalApi from "../Utils/GlobalApi";
import { client } from "../Utils/KindConfig";
import Header from "../components/Header";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { auth, setAuth } = useContext(AuthContext);
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  const handleLogout = async () => {
    const loggedOut = await client.logout();

    if (loggedOut) {
      setAuth(false);
      navigation.navigate("Profile");
    }
  };

  const getCategories = () => {
    GlobalApi.getCategories().then((response) => {
      console.log(response.categories);
    });
  };
  return (
    <View>
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

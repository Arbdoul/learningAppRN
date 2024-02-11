import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../Utils/Colors";
import { client } from "../Utils/KindConfig";
const LoginScreen = () => {
  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      // User was authenticated
      console.log("authenticated successfully");
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      console.log("authenticated successfully");
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("./../../assets/rockett.jpg")}
          style={{
            width: "100%",

            height: 400,
            objectFit: "cover",
          }}
        />
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 45, fontWeight: "bold" }}>
            Welcome To
            <Text style={{ color: Colors.PRIMARY }}> CodeBox</Text>
          </Text>
          <Text style={{ fontSize: 20, marginTop: 7, color: Colors.GRAY }}>
            Learn programming by building real life project
          </Text>
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={{ textAlign: "center", color: Colors.WHITE }}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp}>
            <Text
              style={{
                marginTop: 10,
                color: Colors.PRIMARY,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Create new account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: 60,
  },
});

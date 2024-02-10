import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";

const LoginScreen = () => {
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

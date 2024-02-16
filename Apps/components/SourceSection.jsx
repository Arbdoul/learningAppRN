import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";

const SourceSection = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        gap: 10,
      }}
    >
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          alignItems: center,
          borderRadius: 10,
          width: 120,
        }}
      >
        <Image
          source={{ uri: require("../../assets/code.jpg") }}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: "outfit" }}>Source code</Text>
      </View>

      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          alignItems: center,
          borderRadius: 10,
          width: 120,
        }}
      >
        <Image
          source={{ uri: require("../../assets/demo.jpg") }}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: "outfit" }}>Demo</Text>
      </View>

      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          alignItems: center,
          borderRadius: 10,
          width: 120,
        }}
      >
        <Image
          source={{ uri: require("../../assets/youtube.jpg") }}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: "outfit" }}>Youtube</Text>
      </View>
    </View>
  );
};

export default SourceSection;

const styles = StyleSheet.create({});

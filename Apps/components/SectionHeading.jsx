import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";

const SectionHeading = ({ heading }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          marginBottom: 5,
          marginHorizontal: 15,
          marginTop: 20,
          color: Colors.PRIMARY,
        }}
      >
        {heading}
      </Text>
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({});

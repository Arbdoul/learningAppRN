import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../Utils/Colors";

const SourceSection = ({ course, userEnrollment }) => {
  const onSourceClick = (url) => {
    Linking.openURL(url);
  };

  const onDemoClick = (url) => {
    Linking.openURL(url);
  };

  const onYoutubeClick = (url) => {
    Linking.openURL(url);
  };

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
      <TouchableOpacity
        onPress={() => onSourceClick(course.sourceCode)}
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          alignItems: "center",
          borderRadius: 10,
          width: 120,
          borderWidth: 0.3,
        }}
      >
        <Image
          source={require("../../assets/code.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: "outfit" }}>Source code</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onDemoClick(course.demoUrl)}
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          alignItems: "center",
          borderRadius: 10,
          width: 120,
          borderWidth: 0.3,
        }}
      >
        <Image
          source={require("../../assets/demo.jpg")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: "outfit" }}>Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onYoutubeClick(course.youtubeUrl)}
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          alignItems: "center",
          borderRadius: 10,
          width: 120,
          borderWidth: 0.3,
        }}
      >
        <Image
          source={require("../../assets/youtube.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: "outfit" }}>Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SourceSection;

const styles = StyleSheet.create({});

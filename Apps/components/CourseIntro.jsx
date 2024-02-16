import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";
import SectionHeading from "./SectionHeading";

const CourseIntro = ({ course }) => {
  return (
    <View>
      <Video
        style={styles.video}
        source={{
          uri: course?.chapter[0]?.video?.url,
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
      <View style={{ display: "flex", gap: 10 }}>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          {course?.name}
        </Text>
        <Text
          style={{ fontSize: 14, fontFamily: "outfit", color: Colors.GRAY }}
        >
          {course?.author}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {course?.chapter?.length ? (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Ionicons name="book" size={24} color={Colors.PRIMARY} />
              <Text style={{ color: Colors.GRAY, fontFamily: "outfit-bold" }}>
                {course?.chapter.length}
              </Text>
            </View>
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Ionicons name="logo-youtube" size={20} color={"red"} />
              <Text style={{ color: Colors.GRAY, fontFamily: "outfit-bold" }}>
                Watch On Youtube
              </Text>
            </View>
          )}

          <Text style={{ fontFamily: "outfit-bold", color: Colors.PRIMARY }}>
            {course?.free ? "Free" : "Paid"}
          </Text>
        </View>

        <SectionHeading heading={"Description"} />
      </View>
    </View>
  );
};

export default CourseIntro;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 250,
  },
});

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";

const CourseItem = ({ course }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        width: 260,
        marginRight: 15,
        padding: 10,
        borderRadius: 10,
        gap: 4,
      }}
    >
      <Image
        source={{ uri: course.banner.url }}
        style={{ width: 240, height: 130, borderRadius: 15 }}
      />
      <View style={{ display: "flex", gap: 3 }}>
        <Text style={{ fontSize: 16, fontFamily: "outfit-bold" }}>
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
            {course.free ? "Free" : "Paid"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CourseItem;

const styles = StyleSheet.create({});

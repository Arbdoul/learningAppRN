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
      }}
    >
      <Image
        source={{ uri: course.banner.url }}
        style={{ width: 240, height: 130, borderRadius: 15 }}
      />
      <View>
        <Text style={{ fontSize: 16, fontFamily: "outfit-bold" }}>
          {course?.name}
        </Text>
        <Text
          style={{ fontSize: 14, fontFamily: "outfit", color: Colors.GRAY }}
        >
          {course?.author}
        </Text>
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
            <Text style={{ color: Colors.GRAY }}>{course?.chapter.length}</Text>
          </View>
        ) : null}
        <Text>{}</Text>
      </View>
    </View>
  );
};

export default CourseItem;

const styles = StyleSheet.create({});

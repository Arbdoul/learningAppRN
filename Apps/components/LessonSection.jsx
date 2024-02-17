import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SectionHeading from "./SectionHeading";

const LessonSection = ({ course }) => {
  return (
    <View>
      <SectionHeading heading={"Lessons"} />
      <FlatList
        data={course?.chapter}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Text>{index + 1}</Text>
              <Text style={{ numberOfLines: 2 }}>{item?.name}</Text>
            </View>
            <Ionicons name="play-circle" size={24} color="black" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LessonSection;

const styles = StyleSheet.create({});

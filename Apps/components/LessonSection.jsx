import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../Utils/Colors";
import SectionHeading from "./SectionHeading";

const LessonSection = ({ course }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <SectionHeading heading={"Lessons"} />
      <FlatList
        data={course?.chapter}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItem: "center",
              margin: 5,
              padding: 15,
              borderWidth: 0.5,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: "outfit",
                  padding: 10,
                  backgroundColor: Colors.PRIMARY_LIGHT,
                  borderRadius: 15,
                  width: 40,
                  height: 40,
                  textAlign: "center;",
                  color: Colors.PRIMARY,
                }}
              >
                {index + 1}.
              </Text>
              <Text
                style={{
                  width: 200,
                  fontSize: 17,
                  fontFamily: "outfit-medium",
                }}
                numberOfLines={2}
              >
                {item?.name}
              </Text>
            </View>
            <Ionicons name="play-circle" size={34} color={Colors.PRIMARY} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LessonSection;

const styles = StyleSheet.create({});

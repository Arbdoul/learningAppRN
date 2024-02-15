import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CourseDetailScreen = () => {
  const { params } = useRoute();
  const [course, setCourse] = useState();

  useEffect(() => {
    setCourse(params.course);
  });
  return (
    <View styles={{ padding: 20, marginTop: 25 }}>
      <View styles={{ display: "flex" }}>
        <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
        <Text>Course Detail</Text>
      </View>
    </View>
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({
  container: {},
});

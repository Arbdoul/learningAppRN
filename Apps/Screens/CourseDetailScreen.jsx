import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CourseIntro from "../components/CourseIntro";
import EnrollmentSection from "../components/EnrollmentSection";
import SourceSection from "../components/SourceSection";

const CourseDetailScreen = () => {
  const { params } = useRoute();
  const [course, setCourse] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    setCourse(params.course);
  });
  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 27, fontFamily: "outfit-bold" }}>
          Course Detail
        </Text>
      </View>

      <CourseIntro course={course} />
      {/* Source section */}
      <SourceSection />

      {/* Enrollment section */}
      <EnrollmentSection />
    </View>
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({
  container: {},
});

import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UserDetailContext } from "../../App";
import GlobalApi from "../Utils/GlobalApi";
import CourseIntro from "../components/CourseIntro";
import EnrollmentSection from "../components/EnrollmentSection";
import LessonSection from "../components/LessonSection";
import SourceSection from "../components/SourceSection";

const CourseDetailScreen = () => {
  const { params } = useRoute();
  const [course, setCourse] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const navigation = useNavigation();

  //console.log("--the userdetails: ", userDetail);

  useEffect(() => {
    setCourse(params.course);
    params && userDetail && checkIsUserEnrolledToCourse();
  }, [params]);

  const checkIsUserEnrolledToCourse = () => {
    //email slug
    course &&
      GlobalApi.checkUserCourseEnrollment(
        params.course?.slug,
        userDetail.email
      ).then((res) => {
        console.log("--the resonse: ", res);
      });
  };
  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>
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

      {/* lession section */}
      <LessonSection course={course} />
    </ScrollView>
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({
  container: {},
});

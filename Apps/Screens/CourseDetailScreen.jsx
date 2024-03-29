import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MembershipContext, UserDetailContext } from "../../App";
import GlobalApi from "../Utils/GlobalApi";
import CourseIntro from "../components/CourseIntro";
import EnrollmentSection from "../components/EnrollmentSection";
import LessonSection from "../components/LessonSection";
import SourceSection from "../components/SourceSection";

const CourseDetailScreen = () => {
  const { params } = useRoute();
  const [course, setCourse] = useState();
  const [userEnrollment, setUserEnrollment] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { isMember, setIsMember } = useContext(MembershipContext);

  const navigation = useNavigation();

  useEffect(() => {
    setCourse(params.course);
    params && userDetail && checkIsUserEnrolledToCourse(params.course);
  }, [params && userDetail]);

  const checkIsUserEnrolledToCourse = (course) => {
    //email slug
    course &&
      GlobalApi.checkUserCourseEnrollment(course?.id, userDetail.email).then(
        (res) => {
          setUserEnrollment(res?.userEnrollCourses);
        }
      );
  };

  const onEnrollmentPress = () => {
    if (course?.free) {
      saveUserEnrollment();
    } else {
      if (!isMember) {
        navigation.navigate("membershipModal");
        return;
      }
      saveUserEnrollment();
    }
  };

  const saveUserEnrollment = () => {
    GlobalApi.saveUserCourseEnrollment(course.id, userDetail.email).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          Alert.alert("Great", "You just enroll to new course.", [
            {
              text: "ok",
              onPress: () => console.log("Ok Press"),
              style: "cancel",
            },
          ]);
          checkIsUserEnrolledToCourse();
        }
      }
    );
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
      <SourceSection course={course} userEnrollment={userEnrollment} />

      {/* Enrollment section */}
      <EnrollmentSection
        userEnrollment={userEnrollment}
        onEnrollmentPress={() => onEnrollmentPress()}
        onContinuePress={() =>
          navigation.navigate("watchLesson", {
            course: course,
            userEnrollment: userEnrollment,
          })
        }
      />

      {/* lession section */}
      <LessonSection course={course} />
    </ScrollView>
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({
  container: {},
});

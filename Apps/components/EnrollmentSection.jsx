import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";

const EnrollmentSection = ({ userEnrollment }) => {
  // const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // console.log(userEnrollment);
  }, []);

  return (
    <View
      style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        marginTop: 20,
      }}
    >
      {userEnrollment?.length > 0 ? (
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: Colors.WHITE,
          }}
        >
          Continue
        </Text>
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: Colors.WHITE,
          }}
        >
          Enroll to Course
        </Text>
      )}
    </View>
  );
};

export default EnrollmentSection;

const styles = StyleSheet.create({});

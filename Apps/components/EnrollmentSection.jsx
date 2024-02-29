import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Utils/Colors";

const EnrollmentSection = ({
  userEnrollment,
  onEnrollmentPress,
  onContinuePress,
}) => {
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
        <TouchableOpacity onPress={() => onContinuePress()}>
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
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => onEnrollmentPress()}>
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
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EnrollmentSection;

const styles = StyleSheet.create({});

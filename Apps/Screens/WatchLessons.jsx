import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Utils/Colors";

const WatchLessons = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const [userEnrollment, setUserEnrollment] = useState(params?.userEnrollment);
  const [course, setCourse] = useState(params?.course);
  const [selectedChapter, setSelectedChapter] = useState();

  useEffect(() => {
    params && setSelectedChapter(params?.course?.chapter[0]);
  }, [params]);
  return (
    <View
      tyle={{ backgroundColor: Colors.WHITE, padding: 15, borderRadius: 10 }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 75,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 27, fontFamily: "outfit-bold" }}>Lessons</Text>
      </View>
      {selectedChapter && (
        <Video
          style={styles.video}
          source={{
            uri: selectedChapter.video?.url,
          }}
          useNativeControls={true}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      )}
      <Text>good</Text>
    </View>
  );
};

export default WatchLessons;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 250,
  },
});

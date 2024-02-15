import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CourseItem from "./CourseItem";

const CourseList = ({ courseList }) => {
  return (
    <View>
      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <CourseItem course={item} />}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({});

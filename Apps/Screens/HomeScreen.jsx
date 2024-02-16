import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { AuthContext } from "../../App";
import GlobalApi from "../Utils/GlobalApi";
import { client } from "../Utils/KindConfig";
import CategoryList from "../components/CategoryList";
import CourseList from "../components/CourseList";
import Header from "../components/Header";
import SectionHeading from "../components/SectionHeading";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { auth, setAuth } = useContext(AuthContext);
  const [categories, setCategories] = useState();
  const [courseList, setCourseList] = useState();
  useEffect(() => {
    getCategories();
    getCourseList();
  }, []);

  const handleLogout = async () => {
    const loggedOut = await client.logout();

    if (loggedOut) {
      setAuth(false);
      navigation.navigate("Profile");
    }
  };

  const getCategories = () => {
    GlobalApi.getCategories().then((response) => {
      setCategories(response?.categories);
    });
  };

  const getCourseList = () => {
    GlobalApi.getCourseList().then((response) => {
      setCourseList(response?.courseLists);
    });
  };
  //.filter((item) => item?.tag?.includes(tag));
  const getFilterCouserList = (tag) => {
    const result = courseList?.filter((item) => item?.tags?.includes(tag));
    return result;
  };

  const getNextjsCouserList = (tag) => {
    const result = courseList?.filter((item) => item?.tags?.includes(tag));
    return result;
  };
  return (
    <ScrollView>
      <Header />
      <CategoryList categories={categories} />
      {/* courselist */}
      <SectionHeading heading="Latest Courses" />
      <CourseList courseList={courseList} />

      {/* React course */}
      <SectionHeading heading="React Courses" />
      <CourseList courseList={getFilterCouserList("react")} />

      {/* React course */}
      <SectionHeading heading="Nextjs Courses" />
      <CourseList courseList={getNextjsCouserList("nextjs")} />
      {/* React course */}
      <SectionHeading heading="React native Courses" />
      <CourseList courseList={getNextjsCouserList("reactnative")} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

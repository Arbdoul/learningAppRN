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

  const getFilterCouserList = (tag) => {
    // const result = courseList.filter((item) => item.tag.includes(tag));
    // return result;
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
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

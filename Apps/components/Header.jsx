import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../Utils/Colors";
import { client } from "../Utils/KindConfig";

export default function Header() {
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const user = await client.getUserDetails();
    console.log(user);
    setUserDetail(user);
  };

  return (
    <>
      <View
        style={{
          padding: 20,
          marginTop: 25,
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: userDetail?.picture }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ fontSize: 18, fontFamily: "outfit" }}>Welcome</Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit-bold",
              color: Colors.PRIMARY,
            }}
          >
            Hello {userDetail?.given_name}
          </Text>
        </View>
      </View>
      <View style={styles.input}>
        <Ionicons name="search" size={24} color={Colors.GRAY} />
        <TextInput
          placeholder="Search"
          style={{ fontFamily: "outfit", width: "100%" }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 99,
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.PRIMARY,
  },
});

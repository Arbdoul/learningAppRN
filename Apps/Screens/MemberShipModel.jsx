import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Utils/Colors";

const MemberShipModal = () => {
  return (
    <View>
      <Image
        source={require("../../assets/membership.png")}
        resizeMode="cover"
        style={{ width: "100%", height: 350 }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={{ borderRadius: 15, borderWidth: 1, width: 100 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text>1 Month</Text>
            <View style={{ borderWidth: 0.2, width: "100%", margin: 10 }} />
            <Text style={{ fontWeight: "bold" }}>$4.99</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderRadius: 15, borderWidth: 1, width: 100 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text>1 year</Text>
            <View style={{ borderWidth: 0.2, width: "100%", margin: 10 }} />
            <Text style={{ fontWeight: "bold" }}>$4.99</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          padding: 20,
          margin: 20,
          borderRadius: 16,
          backgroundColor: Colors.PRIMARY,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            color: Colors.WHITE,
          }}
        >
          Get Membership Now
        </Text>
      </TouchableOpacity>
      <View style={{ margin: 20 }}>
        <Text style={{ color: Colors.GRAY }}>
          You can purchase the membership to access all the course along with
          the source code and extra
        </Text>
        <Text style={{ color: Colors.GRAY, paddingTop: 10 }}>
          If you want to cancel membership, then email us on: arbdool1@gmail.ocm
        </Text>
      </View>
    </View>
  );
};

export default MemberShipModal;

const styles = StyleSheet.create({});
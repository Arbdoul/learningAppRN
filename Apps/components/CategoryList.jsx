import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

const CategoryList = ({ categories }) => {
  return (
    <View>
      <FlatList
        data={categories}
        horizontal:true
        renderItem={({ item, index }) => (
          <View key={index} style={{}}>
            <Image
              source={{ uri: item?.icon?.url }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 99,
                objectFit: "contained",
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});

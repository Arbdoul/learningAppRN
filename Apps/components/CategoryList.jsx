import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../Utils/Colors";
import SectionHeading from "./SectionHeading";

const CategoryList = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <View style={{}}>
      <SectionHeading heading="Category" />
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setActiveIndex(index)}
            style={[
              styles.container,
              activeIndex === index && {
                borderWidth: 1,
                borderColor: Colors.PRIMARY,
              },
            ]}
          >
            <Image
              source={{ uri: item?.icon?.url }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 99,
                objectFit: "contain",
              }}
            />
            <Text style={{ texAlign: "center", marginTop: 4 }}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 90,
  },
});

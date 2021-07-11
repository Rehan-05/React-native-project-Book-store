import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";

function Author(authorName, Req) {
  if (Req) {
    return (
      <Text style={{ fontSize: 10, textAlign: "center" }}>by {authorName}</Text>
    );
  } else {
    return false;
  }
}

export default function HorizontalListedBook({
  data,
  ListHeaderComponent,
  BorderRadius,
  fontSize,
  justifyContent,
  width,
  height,
  author,
  numColumns,
  ...rest
}) {
  const [bColor, setBColor] = React.useState("");
  const navigation = useNavigation();

  const position = new Animated.Value(0);

  

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        bounces={false}
        {...rest}
        renderItem={(item) => {
         
          return (
            <View
              style={{ justifyContent: justifyContent, borderColor: bColor }}
            >
              <TouchableOpacity
                onPressIn={() => setBColor({ bColor: "dark" })}
                onPressOut={() => setBColor({ bColor: "transparent" })}
                onPress={() =>
                  navigation.navigate("Detail", {
                    detail: {
                      Url: item.item.image,
                      title: item.item.title,
                      Author: item.item.author,
                      downloadUrl:item.item.downloadURL,
                      Status: "free",
                    },
                  })
                }
              >
                <Image
                  source={{ uri: item.item.image }}
                  style={{
                    width: width,
                    height: height,
                    marginLeft: 20,
                    borderRadius: BorderRadius,
                  }}
                />

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: fontSize,
                    fontStyle: "italic",
                    justifyContent: "center",
                  }}
                >
                  {item.item.title}
                </Text>
              </TouchableOpacity>
              {Author(item.item.author, author)}
            </View>
          );
        }}
      />
    </View>
  );
}

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
function Rating({ Rating }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Icon
        name="star"
        color={Rating >= 1 ? "yellow" : "#fff"}
        size={15}
        style={{ margin: 5 }}
      />
      <Icon
        name="star"
        color={Rating >= 2 ? "yellow" : "#fff"}
        size={15}
        style={{ margin: 5 }}
      />

      <Icon
        name="star"
        color={Rating >= 3 ? "yellow" : "#fff"}
        size={15}
        style={{ margin: 5 }}
      />
      <Icon
        name="star"
        color={Rating >= 4 ? "yellow" : "#fff"}
        size={15}
        style={{ margin: 5 }}
      />
      <Icon
        name="star"
        color={Rating >= 5 ? "yellow" : "#fff"}
        size={15}
        style={{ margin: 5 }}
      />
    </View>
  );
}

export default function Card({ data }) {
  return (
    <View
      style={{
        height: 200,
        width: "95%",
        backgroundColor: "#dee3e2",
        margin: 5,
        flexDirection: "row",
        borderRadius: 10,
      }}
    >
      <View>
        <Image
          source={data.item.src}
          style={{
            height: 180,
            width: 120,
            margin: 8,
            marginTop: 8,
            borderRadius: 20,
          }}
        />
      </View>

      <View style={{ flexDirection: "column", marginTop: 15 }}>
        <Text style={{ fontSize: 20 }}>{data.item.Title}</Text>
        <Text style={{ fontSize: 13 }}>{data.item.Author}</Text>

        <View>
          <Rating Rating={data.item.Rating} />
        </View>

        <Text style={{ fontSize: 10 }}>{data.item.description}</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.btnStyle, { backgroundColor: "hotpink" }]}
          >
            <Text style={{ fontSize: 12 }}>Add to Cart</Text>
          </TouchableOpacity>

          {data.item.wishList == true ? (
            <TouchableOpacity
              style={[styles.btnStyle, { backgroundColor: "#fff" }]}
            >
              <Text style={{ fontSize: 10 }}>Delete from WishList</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.btnStyle, { backgroundColor: "#fff" }]}
            >
              <Text style={{ fontSize: 10 }}>Add to WishList</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  btnStyle: {
    height: 40,
    width: 95,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 50,
  },
});

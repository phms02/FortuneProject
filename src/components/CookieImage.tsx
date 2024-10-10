import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function CookieImage({ cookieImage }: any) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={cookieImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 225,
    width: 225
  }
});
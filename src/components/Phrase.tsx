import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function() {
  return (
    <View style={styles.container}>
      <Text style={styles.phrase}>"My first project with React Native and TypeScript!"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",  //! Here, it is obligatory!
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    paddingHorizontal: 25
  },
  phrase: {
    textAlign: "center",
    fontSize: 30,
    fontStyle: "italic",
    color: "#FFE900"
  }
});
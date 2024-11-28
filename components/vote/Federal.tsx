import React from "react";
import { StyleSheet, Text } from "react-native";

const Federal = () => {
  return (
    <Text style={styles.cardSupport}>
      No federal propositions available today
    </Text>
  );
};

const styles = StyleSheet.create({
  cardSupport: {
    fontSize: 16,
    lineHeight: 24,
    color: "#71717a",
    margin: 16,
    textAlign: "center",
  },
});

export default Federal;

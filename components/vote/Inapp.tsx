import { StyleSheet, Text } from "react-native";

const Inapp = () => {
  return (
    <Text style={styles.cardSupport}>No in-app polls available today</Text>
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

export default Inapp;

import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Logo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomColor: "#e4e4e7",
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
    color: "#09090b",
  },
});

export default Header;

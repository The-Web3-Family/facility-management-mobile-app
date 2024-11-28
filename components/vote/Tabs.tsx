import { FC } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    marginBottom: 16,
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 6,
    borderRadius: 4,
  },
  tab: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    backgroundColor: "#f3f3f3",
  },
  activeTab: {
    borderBottomColor: "#1d4ed8",
    backgroundColor: "white",
  },
  tabText: {
    color: "#71717a",
    fontSize: 16,
    textAlign: "center",
  },
  activeTabText: {
    color: "#1d4ed8",
  },
});

export default Tabs;

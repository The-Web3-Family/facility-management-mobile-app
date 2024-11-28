import Card from "@/components/vote/Card";
import Header from "@/components/vote/Header";
import Tabs from "@/components/vote/Tabs";
import useDataStore from "@/hooks/useDataStore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("State");
  const tabs = ["In-App", "Federal", "State"];

  const { isLoading, error, getData } = useDataStore();

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.view}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.topic}>Today's questions</Text>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.error}>{error}</Text>}
        {!isLoading && !error && <Card activeTab={activeTab} />}
        <Text style={styles.note}>
          Join 23,000+ Americans who are already making their voices heard.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: { backgroundColor: "#fff", height: "100%" },
  body: { padding: 16, borderColor: "#e4e4e7" },
  note: {
    color: "#71717a",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 32,
  },
  topic: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 28,
    color: "#09090b",
    marginBottom: 16,
  },
  error: { color: "red", marginBottom: 16 },
});

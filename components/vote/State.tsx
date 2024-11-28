import useDataStore from "@/hooks/useDataStore";
import useStepStore from "@/hooks/useStepStore";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

const State = () => {
  const [checked, setChecked] = useState("");
  const { data, isLoading, error } = useDataStore();
  const { step, setStep } = useStepStore();

  const [cardData, setCardData] = useState<any | null>(null);

  useEffect(() => {
    if (data.length > 0) {
      setCardData(data[step]);
    }
  }, [data, step]);

  const handleChangeState = (state: string) => {
    setChecked(state);
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <View style={styles.card}>
      {!isLoading && !error && cardData && (
        <>
          <View style={styles.cardInfo}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>California Proposition 35</Text>
              <Text style={styles.cardState}>
                Question {step + 1} of {data.length}
              </Text>
            </View>
            <Text style={styles.cardSupport}>
              Do you support Proposition 35 in California?
            </Text>
            <Text style={styles.cardSupportInfo}>
              Proposition 35 aims to increase funding for public schools through
              a tax on properties worth over $4 million.
            </Text>
            <View style={styles.radioGroup}>
              <View style={styles.radioItem}>
                <RadioButton
                  value="yes"
                  status={checked === "yes" ? "checked" : "unchecked"}
                  onPress={() => handleChangeState("yes")}
                />
                <Text style={styles.radioLabel}>Yes</Text>
              </View>
              <View style={styles.radioItem}>
                <RadioButton
                  value="no"
                  status={checked === "no" ? "checked" : "unchecked"}
                  onPress={() => handleChangeState("no")}
                />
                <Text style={styles.radioLabel}>No</Text>
              </View>
              <View style={styles.radioItem}>
                <RadioButton
                  value="undecided"
                  status={checked === "undecided" ? "checked" : "unchecked"}
                  onPress={() => handleChangeState("undecided")}
                />
                <Text style={styles.radioLabel}>Undecided</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleNext}>
              Statistics Button
            </Text>
          </TouchableOpacity>
          <View style={styles.cardFooter}>
            <View style={styles.cardFooterInfos}>
              <Text style={styles.cardFooterInfosLeft}>
                People Participating
              </Text>
              <Text style={styles.cardFooterInfosLeft}>
                {cardData.total_participating.toLocaleString()} people are
                participating
              </Text>
            </View>
            <View style={styles.cardFooterInfos}>
              <Text style={styles.cardFooterInfosRight}>
                People Participating
              </Text>
              <Text style={styles.cardFooterInfosRight}>
                {cardData.total_votes.toLocaleString()} people are participating
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    color: "#e4e4e7",
    borderRadius: 8,
    padding: 16,
    borderColor: "#e4e4e4",
    borderWidth: 1,
    display: "flex",
    gap: 24,
  },
  cardInfo: {
    gap: 16,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
  },
  cardState: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    color: "#71717a",
  },
  cardSupport: {
    fontSize: 16,
    lineHeight: 24,
    color: "#09090b",
  },
  cardSupportInfo: {
    fontSize: 14,
    lineHeight: 20,
    color: "#71717a",
  },
  button: {
    backgroundColor: "#181818",
    borderRadius: 6,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonText: {
    color: "#fafafa",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  radioGroup: {
    display: "flex",
    gap: 16,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4e4e7",
  },
  radioLabel: {
    color: "#090909",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  cardFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  cardFooterInfos: {
    flex: 1,
  },
  cardFooterInfosLeft: {
    color: "#717171",
  },
  cardFooterInfosRight: {
    color: "#717171",
    textAlign: "right",
  },
});

export default State;

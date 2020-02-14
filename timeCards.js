import React from "react";
import { StyleSheet, View, Text } from "react-native";

function TimeCard(props) {
  const currentTime = props.children;
  const timeSplit = currentTime.split("");
  return (
    <View style={cardStyles.parent}>
      <Text style={{ fontWeight: "700" }}>
        {currentTime.length === 3
          ? timeSplit.slice(0, 1)
          : timeSplit.slice(0, 2)}
      </Text>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  parent: {
    height: 100,
    width: 70,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TimeCard;

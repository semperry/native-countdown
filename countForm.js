import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Link } from "react-router-native";

import styles from "./styles/stylesheet";

export default function CountForm(props) {
  const [day, setDay] = useState("09");
  const [month, setMonth] = useState("May");
  const [year, setYear] = useState("2020");
  const [hour, setHour] = useState("08");
  const [minutes, setMinutes] = useState("00");

  const { navigate } = props.navigation;

  return (
    <>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.inputBox}
          value={month}
          onChangeText={text => setMonth(text)}
          onFocus={() => setMonth("")}
        />
        <Text>Month (mmm)</Text>
      </View>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.inputBox}
          value={day}
          onChangeText={text => setDay(text)}
          onFocus={() => setDay("")}
        />
        <Text>Day (dd)</Text>
      </View>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.inputBox}
          value={year}
          onChangeText={text => setYear(text)}
          onFocus={() => setYear("")}
        />
        <Text>Year (yyyy)</Text>
      </View>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.inputBox}
          value={hour}
          onChangeText={text => setHour(text)}
          onFocus={() => setHour("")}
        />
        <Text>Hour (24hr, hh)</Text>
      </View>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.inputBox}
          value={minutes}
          onChangeText={text => setMinutes(text)}
          onFocus={() => setMinutes("")}
        />
        <Text>Minutes (mm)</Text>
      </View>
      <Text>{"\n"}</Text>
      <View style={styles.flexCenter}>
        <Text>{"\n"}</Text>
        <TouchableHighlight
          underlayColor="white"
          // onPress={() =>
          //   props.handleDataEntry({ day, month, year, hour, minutes })
          // }
          onPress={() =>
            navigate("Counter", {
              startTime: { hour, minutes, day, year, month }
            })
          }
        >
          <View style={styles.buttonStyles}>
            {/* <Link to="/countdown">
              <Text style={styles.buttonText}>Start Counting</Text>
            </Link> */}
            <Text style={styles.buttonText}>Start Counting</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}

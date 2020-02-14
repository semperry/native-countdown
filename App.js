import React, { useState } from "react";
import styles from "./styles/stylesheet";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "react-native-gesture-handler";
import { NativeRouter, Route, nativeHistory } from "react-router-native";
import { View, Text } from "react-native";

import CountDown from "./countDown.js";
import CountForm from "./countForm";

const MainNavigator = createStackNavigator({
  Home: { screen: CountForm },
  Counter: { screen: CountDown }
});

const App = createAppContainer(MainNavigator);

// function App() {
//   const [day, setDay] = useState("09");
//   const [month, setMonth] = useState("May");
//   const [year, setYear] = useState("2020");
//   const [hour, setHour] = useState("08");
//   const [minutes, setMinutes] = useState("00");

//   const handleDateEntry = ({ day, month, year, hour, minutes }) => {
//     setDay(day);
//     setMonth(month);
//     setYear(year);
//     setHour(hour);
//     setMinutes(minutes);
//   };

//   return (
//     <NativeRouter history={nativeHistory}>
//       <View
//         style={{
//           ...styles.flexCenter,
//           marginTop: 50
//         }}
//       >
//         <Text accessibilityRole="header" style={{ fontWeight: "bold" }}>
//           Count Down App
//         </Text>
//         <Text>{"\n"}</Text>
//       </View>

//       <Route
//         exact
//         path="/"
//         render={props => (
//           <CountForm {...props} handleDateEntry={handleDateEntry} />
//         )}
//       />
//       <Route
//         path="/countdown"
//         render={props => (
//           <CountDown
//             {...props}
//             startTime={{ hour, minutes, day, year, month }}
//           />
//         )}
//       />
//     </NativeRouter>
//   );
// }

export default App;

import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import TimeCard from "./timeCards";

function CountDown(props) {
  const { day, month, year, hour, minutes } = props.startTime;
  const [countDownDate, setCountDownDate] = useState(
    new Date(`${month} ${day}, ${year} ${hour}:${minutes}:00`).getTime()
  );
  const [currentCount, setCurrentCount] = useState([]);
  const [now, setNow] = useState(new Date().getTime());
  const [distance, setDistance] = useState(countDownDate - now);
  const [endMessage, setEndMessage] = useState("Oh you outta time babeh!");

  const createLabel = char => {
    switch (char) {
      case "D":
        return "Days";
      case "H":
        return "Hours";
      case "M":
        return "Minutes";
      case "S":
        return "Seconds";
      default:
        return char;
    }
  };

  const renderPlacards = () => {
    return currentCount.map(time => {
      const timeSplit = time
        .split("")
        .join("")
        .replace(" ", "");
      return (
        <View
          key={time}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TimeCard>{time}</TimeCard>
          <Text style={{ fontWeight: "700" }}>
            {createLabel(timeSplit[timeSplit.length - 1].toUpperCase())}
          </Text>
        </View>
      );
    });
  };

  const tick = () => {
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCurrentCount([
      days + "d ",
      hours + "h ",
      minutes + "m ",
      seconds + "s "
    ]);
    setNow(new Date().getTime());
    setDistance(countDownDate - now);
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    if (distance <= 0) {
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [now, distance]);

  return (
    <View
      style={{
        marginTop: 200
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50
        }}
      >
        <Text>Count Down Until:</Text>
        <Text>{`${month} ${day}, ${year} at ${hour}:${minutes}:00`}</Text>
      </View>
      {distance <= 0 ? (
        <Text>{endMessage}</Text>
      ) : (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          {renderPlacards()}
        </View>
      )}
    </View>
  );
}

export default CountDown;

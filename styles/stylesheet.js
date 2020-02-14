import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  inputBox: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    width: 70
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200
  },
  buttonStyles: {
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "black"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});

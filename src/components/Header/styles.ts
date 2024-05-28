import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#0d0d0d",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 20,
    height: 32,
  },
  title: {
    flexDirection: "row",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  titleFirstPart: {
    color: "#4EA8DE",
  },
  titleSecondPart: {
    color: "#5E60CE",
  },
});

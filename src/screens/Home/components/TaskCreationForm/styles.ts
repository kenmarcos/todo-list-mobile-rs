import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskCreationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 24,
    marginTop: -27,
  },
  input: {
    height: 54,
    flex: 1,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    padding: 16,
    color: "#F2F2F2",
  },
  button: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
});

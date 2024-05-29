import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    paddingVertical: 12,
    paddingRight: 8,
    paddingLeft: 12,
    borderRadius: 8,
    minHeight: 64,
    gap: 18,
  },
  taskInfo: {
    flex: 1,
    flexDirection: "row",
  },
  taskText: {
    color: "#F2F2F2",
    fontSize: 14,
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});

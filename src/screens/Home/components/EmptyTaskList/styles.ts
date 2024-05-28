import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  emptyTasksContainer: {
    borderTopWidth: 2,
    borderTopColor: "#333333",
    marginTop: 20,
    minHeight: 208,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  message: {},
  messageText: {
    color: "#808080",
    textAlign: "center",
  },
  mainMessageText: {
    fontWeight: "bold",
  },
});

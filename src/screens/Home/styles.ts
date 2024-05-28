import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },

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
  },
  button: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },

  tasksContainer: {
    marginTop: 32,
    marginHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  taskInfoText: {
    fontWeight: "bold",
  },
  createdTasks: {
    color: "#4EA8DE",
  },
  completedTasks: {
    color: "#8284FA",
  },
  badge: {
    backgroundColor: "#333333",
    width: 30,
    borderRadius: 999,
    alignItems: "center",
  },
  badgeText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },

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

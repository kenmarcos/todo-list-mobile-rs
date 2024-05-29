import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#1a1a1a",
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

  taskList: {
    marginTop: 20,
  },
});

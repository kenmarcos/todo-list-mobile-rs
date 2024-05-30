import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { TaskCreationForm } from "./components/TaskCreationForm";
import { EmptyTaskList } from "./components/EmptyTaskList";
import { TaskCard } from "./components/TaskCard";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export const Home = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <View style={styles.homeContainer}>
      <Header />

      <TaskCreationForm />

      <View style={styles.tasksContainer}>
        <View style={styles.tasksHeader}>
          <View style={styles.taskInfo}>
            <Text style={[styles.taskInfoText, styles.createdTasks]}>
              Criadas
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </View>

          <View style={styles.taskInfo}>
            <Text style={[styles.taskInfoText, styles.completedTasks]}>
              Concluídas
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </View>
        </View>

        <FlatList
          style={styles.taskList}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TaskCard task={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyTaskList />}
        />
      </View>
    </View>
  );
};

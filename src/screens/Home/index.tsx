import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react-native";
import { TaskCreationForm } from "./components/TaskCreationForm";
import { EmptyTaskList } from "./components/EmptyTaskList";

export const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Header />

      <TaskCreationForm />

      <View style={styles.tasksContainer}>
        <View style={styles.header}>
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

        <EmptyTaskList />
      </View>
    </View>
  );
};

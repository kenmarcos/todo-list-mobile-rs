import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react-native";
import { TaskCreationForm } from "./components/TaskCreationForm";
import { EmptyTaskList } from "./components/EmptyTaskList";
import { TaskCard } from "./components/TaskCard";

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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

        <FlatList
          style={styles.taskList}
          data={tasks}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <TaskCard />}
          showsVerticalScrollIndicator={false}
        />

        {/* <EmptyTaskList /> */}
      </View>
    </View>
  );
};

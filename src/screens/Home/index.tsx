import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { PlusCircle } from "phosphor-react-native";

export const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Header />

      <View style={styles.taskCreationContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button}>
          <PlusCircle size={16} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

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

        <View style={styles.emptyTasksContainer}>
          <Image source={require("../../assets/clipboard.png")} />

          <View style={styles.message}>
            <Text style={[styles.messageText, styles.mainMessageText]}>
              Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.messageText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

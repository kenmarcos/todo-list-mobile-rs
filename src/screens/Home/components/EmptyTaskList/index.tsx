import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export const EmptyTaskList = () => {
  return (
    <View style={styles.emptyTasksContainer}>
      <Image source={require("../../../../assets/clipboard.png")} />

      <View style={styles.message}>
        <Text style={[styles.messageText, styles.mainMessageText]}>
          Você ainda não tem tarefas cadastradas
        </Text>

        <Text style={styles.messageText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};

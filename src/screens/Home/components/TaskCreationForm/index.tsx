import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";

export const TaskCreationForm = () => {
  return (
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
  );
};

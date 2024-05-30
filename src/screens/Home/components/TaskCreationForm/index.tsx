import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { useContext, useState } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";
import uuid from "react-native-uuid";

export const TaskCreationForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const { addTask } = useContext(TasksContext);

  const handleChangeTaskInput = (text: string) => {
    setTaskInput(text);
  };

  const handleAddTask = () => {
    addTask({
      id: uuid.v4().toString(),
      title: taskInput,
      done: false,
    });

    setTaskInput("");
  };

  return (
    <View style={styles.taskCreationContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={handleChangeTaskInput}
        value={taskInput}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <PlusCircle size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
};

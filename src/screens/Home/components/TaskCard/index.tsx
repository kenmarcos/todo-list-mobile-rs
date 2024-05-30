import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "phosphor-react-native";
import { Task } from "../../../../reducers/tasks/reducer";
import { useContext } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { deleteTask, toggleTask } = useContext(TasksContext);

  const handleDeleteTask = () => {
    Alert.alert("Deletar", "Tem certeza que deseja deletar esta tarefa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Deletar",
        onPress: () => deleteTask(task.id),
      },
    ]);
  };

  const handleCheckTask = (isChecked: boolean) => {
    toggleTask({
      taskId: task.id,
      isDone: isChecked,
    });
  };

  return (
    <View style={styles.taskContainer}>
      <BouncyCheckbox
        size={17.45}
        text={task.title}
        textStyle={styles.taskText}
        style={styles.taskInfo}
        fillColor="#5E60CE"
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={task.done}
        onPress={(isChecked: boolean) => handleCheckTask(isChecked)}
      />

      <TouchableOpacity style={styles.button} onPress={handleDeleteTask}>
        <Trash size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
};

import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "phosphor-react-native";
import { Task } from "../../../../reducers/tasks/reducer";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
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
      />

      <TouchableOpacity style={styles.button}>
        <Trash size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
};

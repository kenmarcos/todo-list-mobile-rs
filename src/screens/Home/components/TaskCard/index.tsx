import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "phosphor-react-native";

export const TaskCard = () => {
  return (
    <View style={styles.taskContainer}>
      <BouncyCheckbox
        size={17.45}
        text="Integer urna interdum massa libero auctor neque turpis turpis semper."
        textStyle={styles.taskText}
        style={styles.taskInfo}
        fillColor="#5E60CE"
        innerIconStyle={{ borderWidth: 2 }}
      />

      <TouchableOpacity style={styles.button}>
        <Trash size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
};

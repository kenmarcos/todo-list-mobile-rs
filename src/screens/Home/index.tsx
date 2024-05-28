import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Header />

      <Text>Home</Text>
    </View>
  );
};

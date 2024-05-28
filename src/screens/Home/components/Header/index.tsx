import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/rocket.png")}
        />
        <View style={styles.title}>
          <Text style={[styles.titleText, styles.titleFirstPart]}>to</Text>
          <Text style={[styles.titleText, styles.titleSecondPart]}>do</Text>
        </View>
      </View>
    </View>
  );
};

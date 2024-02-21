import { Pressable, StyleSheet, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";
import { ButtonProps } from "../../types";

const PrimaryButton = ({ label, onPress }: ButtonProps) => {
  return (
    <View style={primaryStyle.buttonContainer}>
      <Pressable style={primaryStyle.button} onPress={onPress}>
        <FontAwesome
          name="picture-o"
          size={18}
          color="#25292e"
          style={styles.buttonIcon}
        />
        <Text style={primaryStyle.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

const primaryStyle = StyleSheet.create({
  buttonContainer: {
    ...styles.buttonContainer,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
  },
  button: {
    ...styles.button,
    backgroundColor: "#fff",
  },
  buttonLabel: {
    ...styles.buttonLabel,
    color: "#25292e",
  },
});

export default PrimaryButton;

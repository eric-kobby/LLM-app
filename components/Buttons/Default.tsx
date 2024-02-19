import { Pressable, View, Text } from 'react-native';
import { styles } from './styles';
import { ButtonProps } from '../../types';

const DefaultButton = ({ label, onPress } : ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default DefaultButton;
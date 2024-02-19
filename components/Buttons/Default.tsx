import { Pressable, View, Text } from 'react-native';
import { styles } from './styles';

const DefaultButton = ({ label } : ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default DefaultButton;
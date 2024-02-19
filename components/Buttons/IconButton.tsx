import { Pressable, StyleSheet, Text, TextProps } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ButtonProps, IconProps } from '../../types';

type IconButtonProps = IconProps<any> & ButtonProps;

export default function IconButton({ icon, label, onPress }: IconButtonProps) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});

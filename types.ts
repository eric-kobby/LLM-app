import { GestureResponderEvent } from "react-native";

export type ButtonProps = {
  label: string;
  theme?: "primary" | "default";
  onPress?: (e: GestureResponderEvent) => void;
}

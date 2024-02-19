import { GestureResponderEvent, OpaqueColorValue, TextProps } from "react-native";

export type ButtonProps = {
  label?: string;
  theme?: "primary" | "default";
  onPress?: (e: GestureResponderEvent) => void;
}


export interface IconProps<GLYPHS extends string> extends TextProps {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number;
  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://expo.github.io/vector-icons/}
   */
  icon: GLYPHS;
  /**
   * Color of the icon. Can be a string or OpaqueColorValue (returned from
   * PlatformColor(..))
   *
   */
  color?: string | OpaqueColorValue;
}
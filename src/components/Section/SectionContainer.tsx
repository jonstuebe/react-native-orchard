import { type JSX } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";

export interface SectionContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}

export function SectionContainer({ children, style }: SectionContainerProps) {
  return <View style={[{}, style]}>{children}</View>;
}

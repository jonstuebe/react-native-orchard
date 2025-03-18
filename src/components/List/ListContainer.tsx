import { type ReactNode } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";

export interface ListContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function ListContainer({ children, style }: ListContainerProps) {
  return (
    <View
      style={[
        {
          paddingHorizontal: 16,
          gap: 16,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

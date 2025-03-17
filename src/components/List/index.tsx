import { type ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";

interface ContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Container({ children, style }: ContainerProps) {
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

export const List = {
  Container,
};

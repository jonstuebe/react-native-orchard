import { View } from "react-native";

import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export interface RowTrailingProps extends ViewProps {
  children: ReactNode;
}

export function RowTrailing({ children, style, ...props }: RowTrailingProps) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 12,
          flex: 2 / 3,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

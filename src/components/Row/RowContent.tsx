import { View } from "react-native";

import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

export interface RowContentProps extends ViewProps {
  children: ReactNode;
}

export function RowContent({ children, style, ...props }: RowContentProps) {
  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
}

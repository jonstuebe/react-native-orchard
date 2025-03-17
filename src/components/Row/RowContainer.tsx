import { type ReactNode } from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";

import { useTheme } from "../../hooks";

export interface RowContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  rounded?: boolean;
}

export const rowContainerStyles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
});

export function RowContainer({
  children,
  style,
  rounded = true,
}: RowContainerProps) {
  const { colors, radius } = useTheme();

  return (
    <View
      style={[
        rowContainerStyles.root,
        {
          backgroundColor: colors.rowContainer,
          borderRadius: rounded ? radius.rowContainer : undefined,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

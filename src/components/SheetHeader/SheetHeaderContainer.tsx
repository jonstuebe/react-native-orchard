import { Children, type ReactNode } from "react";
import { View } from "react-native";

import { useTheme } from "../../hooks";

export function SheetHeaderContainer({ children }: { children: ReactNode }) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        paddingTop: 14,
        paddingBottom: 14,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent:
          1 === Children.count(children) ? "flex-end" : "space-between",
        alignItems: "center",
        backgroundColor: colors.backgroundPrimary,
      }}
    >
      {children}
    </View>
  );
}

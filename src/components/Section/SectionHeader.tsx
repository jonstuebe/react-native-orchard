import { type ReactNode } from "react";
import { Text } from "react-native";

import { useTheme } from "../../hooks";

export interface SectionHeaderProps {
  children: ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  const { colors, typography } = useTheme();

  return (
    <Text
      style={[
        typography.bodyRegular,
        {
          fontSize: 13,
          lineHeight: 16,
          textTransform: "uppercase",
          color: colors.labelSecondary,
          marginBottom: 7,
          marginLeft: 16,
        },
      ]}
    >
      {children}
    </Text>
  );
}

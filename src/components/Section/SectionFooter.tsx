import { Text } from "react-native";

import { useTheme } from "../../hooks";

export interface SectionFooterProps {
  children: string;
}

export function SectionFooter({ children }: SectionFooterProps) {
  const { colors, typography } = useTheme();

  return (
    <Text
      style={[
        typography.bodyRegular,
        {
          color: colors.labelSecondary,
          fontSize: 13,
          lineHeight: 16,
          marginTop: 5,
          marginLeft: 16,
        },
      ]}
    >
      {children}
    </Text>
  );
}

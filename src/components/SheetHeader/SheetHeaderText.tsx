import { Text, type TextProps } from "react-native";

import { useTheme } from "../../hooks";

export function SheetHeaderText({ children, style, ...props }: TextProps) {
  const { colors, typography } = useTheme();

  return (
    <Text
      style={[
        typography.title3Regular,
        { color: colors.textPrimaryInverted, fontWeight: "600" },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

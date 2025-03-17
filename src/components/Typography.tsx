import { Text, type TextProps } from "react-native";
import { useTheme } from "../hooks/useTheme";

export type TypographyVariant = keyof ReturnType<typeof useTheme>["typography"];
export type TypographyColor = keyof ReturnType<typeof useTheme>["colors"];

export interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
}

export function Typography({
  style,
  variant = "bodyRegular",
  color,
  ...props
}: TypographyProps) {
  const { colors, typography } = useTheme();

  const variantStyle = typography[variant];

  return (
    <Text
      style={[
        {
          color: color ? colors[color] : undefined,
        },
        variantStyle,
        style,
      ]}
      {...props}
    />
  );
}

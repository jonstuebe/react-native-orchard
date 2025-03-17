import { useMemo, type ReactNode } from "react";
import { Text, type TextProps } from "react-native";
import { useTheme } from "../../hooks";

export interface RowLabelProps extends TextProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  variant?: "title" | "subtitle";
  weight?: "regular" | "medium" | "semibold" | "bold";
}

export function RowLabel({
  children,
  style,
  variant = "title",
  color = "primary",
  weight = "regular",
  ...props
}: RowLabelProps) {
  const { colors, typography } = useTheme();

  const fontWeight = useMemo(() => {
    switch (weight) {
      case "regular":
        return "400";
      case "medium":
        return "500";
      case "semibold":
        return "600";
      case "bold":
        return "700";
      default:
        return "400";
    }
  }, [weight]);

  const colorStyle = useMemo(() => {
    switch (color) {
      case "primary":
        return { color: colors.labelPrimary };
      case "secondary":
        return { color: colors.labelSecondary };
      case "tertiary":
        return { color: colors.labelTertiary };
      case "quaternary":
        return { color: colors.labelQuaternary };
      default:
        break;
    }
  }, []);

  return (
    <Text
      style={[
        variant === "title"
          ? typography.rowLabelTitle
          : typography.rowLabelSubtitle,
        colorStyle,
        {
          fontWeight,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

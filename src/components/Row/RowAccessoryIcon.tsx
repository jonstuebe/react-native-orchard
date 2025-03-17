import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { useTheme } from "../../hooks";
import { useMemo } from "react";

export interface RowAccessoryIconProps
  extends Omit<SymbolViewProps, "tintColor"> {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "blue"
    | (string & {});
}

export function RowAccessoryIcon({
  name,
  color,
  style,
  size = 20,
  type = "monochrome",
  ...props
}: RowAccessoryIconProps) {
  const { colors } = useTheme();

  const tintColor = useMemo(() => {
    switch (color) {
      case "primary":
        return colors.labelPrimary;
      case "secondary":
        return colors.labelSecondary;
      case "tertiary":
        return colors.labelTertiary;
      case "quaternary":
        return colors.labelQuaternary;
      case "blue":
        return colors.blue;
      default:
        return color;
    }
  }, [color]);

  return (
    <SymbolView
      name={name}
      style={style}
      size={size}
      tintColor={tintColor}
      type={type}
      {...props}
    />
  );
}

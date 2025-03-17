import { useTheme } from "../../hooks";
import { Button, type ButtonProps } from "../Button";

export function RowButton({
  children,
  style,
  textStyle,
  ...props
}: Omit<ButtonProps, "variant">) {
  const { colors, typography } = useTheme();

  return (
    <Button
      variant="plain"
      style={(state) => [
        {
          paddingHorizontal: 8,
          paddingVertical: 8,
          borderRadius: 40,
          backgroundColor: colors.fillTertiary,
        },

        typeof style === "function" ? style(state) : style,
      ]}
      textStyle={(state) => [
        {
          fontWeight: "500",
          fontSize: typography.subheadlineRegular.fontSize,
        },
        typeof textStyle === "function" ? textStyle(state) : textStyle,
      ]}
      {...props}
    >
      {children}
    </Button>
  );
}

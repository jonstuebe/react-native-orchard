import {
  PressableOpacity,
  type PressableOpacityProps,
} from "../PressableOpacity";
import { type RowContainerProps, rowContainerStyles } from "./RowContainer";
import { useTheme } from "../../hooks";

export interface PressableRowContainerProps
  extends Omit<RowContainerProps, "children" | "style">,
    PressableOpacityProps {}

export function PressableRowContainer({
  children,
  rounded = true,
  style,
  ...props
}: PressableRowContainerProps) {
  const { colors, radius } = useTheme();

  return (
    <PressableOpacity
      style={(state) => [
        rowContainerStyles.root,
        {
          backgroundColor: colors.rowContainer,
          borderRadius: rounded ? radius.rowContainer : undefined,
        },
        typeof style === "function" ? style(state) : style,
      ]}
      {...props}
    >
      {children}
    </PressableOpacity>
  );
}

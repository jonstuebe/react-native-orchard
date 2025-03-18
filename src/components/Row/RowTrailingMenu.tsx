import { type MenuComponentProps, MenuView } from "@react-native-menu/menu";
import type { ReactNode } from "react";

import { PressableOpacity } from "../PressableOpacity";
import { RowTrailing } from "./RowTrailing";

export interface RowTrailingMenuProps extends MenuComponentProps {
  children: ReactNode;
  disabled?: boolean;
}

export function RowTrailingMenu({
  children,
  disabled,
  ...props
}: RowTrailingMenuProps) {
  if (disabled) {
    return (
      <PressableOpacity
        activeOpacity={disabled ? 0.5 : 0.8}
        disabled={disabled}
      >
        <RowTrailing>{children}</RowTrailing>
      </PressableOpacity>
    );
  }

  return (
    <PressableOpacity>
      <MenuView {...props}>
        <RowTrailing>{children}</RowTrailing>
      </MenuView>
    </PressableOpacity>
  );
}

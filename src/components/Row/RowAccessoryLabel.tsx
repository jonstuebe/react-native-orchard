import { RowLabel } from "./RowLabel";

import type { RowLabelProps } from "./RowLabel";

export interface RowAccessoryLabelProps extends RowLabelProps {}

export function RowAccessoryLabel({
  children,
  ...props
}: RowAccessoryLabelProps) {
  return (
    <RowLabel color="secondary" {...props}>
      {children}
    </RowLabel>
  );
}

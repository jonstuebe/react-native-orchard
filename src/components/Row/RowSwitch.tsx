import { Switch, type SwitchProps } from "react-native";

export interface RowSwitchProps extends SwitchProps {}

export function RowSwitch({ style, ...props }: RowSwitchProps) {
  return (
    <Switch
      style={[
        {
          marginVertical: -4,
        },
        style,
      ]}
      {...props}
    />
  );
}

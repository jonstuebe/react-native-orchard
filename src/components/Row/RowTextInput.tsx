import { TextInput, type TextInputProps, View } from "react-native";

import { useTheme } from "../../hooks";
import { PressableOpacity } from "../PressableOpacity";

import { RowAccessoryIcon } from "./RowAccessoryIcon";

export interface RowTextInputProps extends TextInputProps {
  onReset?: () => void;
}

export function RowTextInput({
  value,
  onReset,
  style,
  ...props
}: RowTextInputProps) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        flex: 1,
      }}
    >
      <TextInput
        value={value}
        style={[
          {
            color: colors.labelVibrantPrimary,
            flex: 1,
            textAlign: "right",
          },
          style,
        ]}
        {...props}
      />
      {value && onReset && (
        <PressableOpacity hitSlop={4} onPress={onReset}>
          <RowAccessoryIcon
            name="xmark.circle.fill"
            size={16}
            color="secondary"
          />
        </PressableOpacity>
      )}
    </View>
  );
}

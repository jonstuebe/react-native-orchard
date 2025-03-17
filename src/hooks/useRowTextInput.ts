import { useCallback, useState } from "react";
import { type TextInputProps as RNTextInputProps } from "react-native";

import { type RowTextInputProps } from "../components/Row/RowTextInput";
import { useTheme } from "./useTheme";

export function useRowTextInput({
  placeholder,
  style,
  defaultValue,
  ...props
}: Omit<
  RNTextInputProps,
  "value" | "onChangeText" | "onChange" | "placeholderTextColor"
>): RowTextInputProps {
  const { colors } = useTheme();

  const [value, setValue] = useState<string | undefined>(() => defaultValue);

  const onReset = useCallback(() => {
    setValue(undefined);
  }, [setValue]);

  return {
    placeholder,
    value,
    onChangeText: setValue,
    placeholderTextColor: colors.labelVibrantTertiary,
    onReset,
    style: [
      {
        fontSize: 17,
        lineHeight: 20,
      },
      style,
    ],
    ...props,
  };
}

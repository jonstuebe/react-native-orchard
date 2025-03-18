import { useCallback, useState } from "react";

export function useRowSwitch(
  initialValue = false,
  onChangeValue?: (value: boolean) => void
) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    const newValue = !value;
    setValue(newValue);
    onChangeValue?.(newValue);
  }, [onChangeValue, value]);

  return { switchProps: { value, onValueChange: toggle }, setSwitch: setValue };
}

import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { forwardRef, useMemo } from "react";
import type {
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Text, type View } from "react-native";

import Color from "color";
import { useTheme } from "../hooks";
import {
  PressableOpacity,
  type PressableOpacityProps,
} from "./PressableOpacity";

export interface ButtonProps extends PressableOpacityProps {
  variant?: "default" | "plain" | "gray" | "tinted" | "filled";
  padding?: boolean;
  fontWeight?: "400" | "500" | "600";
  destructive?: boolean;
  rounded?: boolean;
  leftSymbol?: SymbolViewProps["name"];
  rightSymbol?: SymbolViewProps["name"];
  textStyle?:
    | ((state: PressableStateCallbackType) => StyleProp<TextStyle>)
    | StyleProp<TextStyle>;
}

export const Button = forwardRef<View, ButtonProps>(function Button(
  {
    variant = "default",
    padding = true,
    fontWeight = "600",
    textStyle,
    children,
    style,
    leftSymbol,
    rightSymbol,
    destructive = false,
    rounded = true,
    ...props
  },
  ref
) {
  const { colors, radius, spacing, typography } = useTheme();
  const styles = useMemo<{
    container: ViewStyle;
    text: TextStyle;
  }>(() => {
    let sharedContainerStyle: ViewStyle = {
      backgroundColor: "transparent",
      paddingHorizontal: padding ? spacing.xxl : 0,
      paddingVertical: padding ? spacing.lg : 0,
      borderRadius: rounded ? radius.lg : undefined,
    };
    let sharedTextStyle: TextStyle = {
      color: colors.white,
      fontSize: typography.subheadlineRegular.fontSize,
      fontWeight,
      textAlign: "center",
    };

    switch (variant) {
      case "gray":
        return {
          container: {
            ...sharedContainerStyle,
            backgroundColor: colors.fillTertiary,
          },
          text: {
            ...sharedTextStyle,
            color: destructive ? colors.red : colors.blue,
          },
        };
      case "plain":
        return {
          container: {
            ...sharedContainerStyle,
          },
          text: {
            ...sharedTextStyle,
            color: destructive ? colors.red : colors.blue,
          },
        };
      case "tinted":
        return {
          container: {
            ...sharedContainerStyle,
            backgroundColor: `${destructive ? colors.red : colors.blue}15`,
          },
          text: {
            ...sharedTextStyle,
            color: destructive ? colors.red : colors.blue,
          },
        };
      default:
        return {
          container: {
            ...sharedContainerStyle,
            backgroundColor: destructive ? colors.red : colors.blue,
          },
          text: {
            ...sharedTextStyle,
          },
        };
    }
  }, [
    variant,
    padding,
    fontWeight,
    destructive,
    rounded,
    colors,
    radius,
    spacing,
    typography,
  ]);

  return (
    <PressableOpacity
      ref={ref}
      {...props}
      style={(state) => [
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        },
        styles.container,
        "function" === typeof style ? style(state) : style,
      ]}
    >
      {(state) => (
        <>
          {leftSymbol ? (
            <SymbolView
              name={leftSymbol}
              tintColor={
                styles.text.color
                  ? Color(styles.text.color).hexa().toString()
                  : undefined
              }
              size={styles.text.fontSize}
            />
          ) : null}
          <Text
            style={[
              styles.text,
              "function" === typeof textStyle ? textStyle(state) : textStyle,
            ]}
          >
            {"function" === typeof children ? children(state) : children}
          </Text>
          {rightSymbol ? (
            <SymbolView
              name={rightSymbol}
              tintColor={
                styles.text.color
                  ? Color(styles.text.color).hexa().toString()
                  : undefined
              }
              size={styles.text.fontSize}
            />
          ) : null}
        </>
      )}
    </PressableOpacity>
  );
});

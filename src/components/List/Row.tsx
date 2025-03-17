import { type MenuComponentProps, MenuView } from "@react-native-menu/menu";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { type ReactNode, useMemo } from "react";
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
  StyleSheet,
  Switch,
  type SwitchProps,
  Text,
  type TextProps,
  View,
  type ViewProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import Swipeable, {
  type SwipeableProps,
} from "react-native-gesture-handler/ReanimatedSwipeable";

import {
  PressableOpacity,
  type PressableOpacityProps,
} from "../PressableOpacity";
import { Button, type ButtonProps } from "../Button";
import { useTheme } from "../../hooks";

interface ContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  rounded?: boolean;
}

const containerStyles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
});

function Container({ children, style, rounded = true }: ContainerProps) {
  const { colors, radius } = useTheme();

  return (
    <View
      style={[
        containerStyles.root,
        {
          backgroundColor: colors.rowContainer,
          borderRadius: rounded ? radius.rowContainer : undefined,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

interface SwipeableContainerProps
  extends Omit<ContainerProps, "children">,
    SwipeableProps {}

function SwipeableContainer({
  children,
  style,
  rounded = true,
  ...props
}: SwipeableContainerProps) {
  return (
    <Swipeable {...props}>
      <Container style={style} rounded={rounded}>
        {children}
      </Container>
    </Swipeable>
  );
}

interface PressableContainerProps
  extends Omit<ContainerProps, "children" | "style">,
    PressableOpacityProps {}

function PressableContainer({
  children,
  rounded = true,
  style,
  ...props
}: PressableContainerProps) {
  const { colors, radius } = useTheme();

  return (
    <PressableOpacity
      style={(state) => [
        containerStyles.root,
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

interface LabelProps extends TextProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  variant?: "title" | "subtitle";
  weight?: "regular" | "medium" | "semibold" | "bold";
}

function Label({
  children,
  style,
  variant = "title",
  color = "primary",
  weight = "regular",
  ...props
}: LabelProps) {
  const { colors, typography } = useTheme();

  const fontWeight = useMemo(() => {
    switch (weight) {
      case "regular":
        return "400";
      case "medium":
        return "500";
      case "semibold":
        return "600";
      case "bold":
        return "700";
      default:
        return "400";
    }
  }, [weight]);

  const colorStyle = useMemo(() => {
    switch (color) {
      case "primary":
        return { color: colors.labelPrimary };
      case "secondary":
        return { color: colors.labelSecondary };
      case "tertiary":
        return { color: colors.labelTertiary };
      case "quaternary":
        return { color: colors.labelQuaternary };
      default:
        break;
    }
  }, []);

  return (
    <Text
      style={[
        variant === "title"
          ? typography.rowLabelTitle
          : typography.rowLabelSubtitle,
        colorStyle,
        {
          fontWeight,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

interface ContentProps extends ViewProps {
  children: ReactNode;
}

function Content({ children, style, ...props }: ContentProps) {
  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
}

interface TrailingProps extends ViewProps {
  children: ReactNode;
}

function Trailing({ children, style, ...props }: TrailingProps) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 12,
          flex: 2 / 3,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

interface AccessoryIconProps extends Omit<SymbolViewProps, "tintColor"> {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "blue"
    | (string & {});
}

function AccessoryIcon({
  name,
  color,
  style,
  size = 20,
  type = "monochrome",
  ...props
}: AccessoryIconProps) {
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

function AccessoryDisclosureIndicator() {
  return <AccessoryIcon name="chevron.right" size={16} color="secondary" />;
}

interface AccessoryLabelProps extends LabelProps {}

function AccessoryLabel({ children, ...props }: AccessoryLabelProps) {
  return (
    <Label color="secondary" {...props}>
      {children}
    </Label>
  );
}

interface TrailingMenuProps extends MenuComponentProps {
  children: ReactNode;
  disabled?: boolean;
}

function TrailingMenu({ children, disabled, ...props }: TrailingMenuProps) {
  if (disabled) {
    return (
      <PressableOpacity
        activeOpacity={disabled ? 0.5 : 0.8}
        disabled={disabled}
      >
        <Trailing>{children}</Trailing>
      </PressableOpacity>
    );
  }

  return (
    <PressableOpacity>
      <MenuView {...props}>
        <Trailing>{children}</Trailing>
      </MenuView>
    </PressableOpacity>
  );
}

export interface TextInputProps extends RNTextInputProps {
  onReset?: () => void;
}

function TextInput({
  children,
  value,
  onReset,
  style,
  ...props
}: TextInputProps) {
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
      <RNTextInput
        value={value}
        style={[
          {
            color: colors.labelPrimary,
            flex: 1,
            textAlign: "right",
          },
          style,
        ]}
        {...props}
      />
      {value && onReset && (
        <PressableOpacity hitSlop={4} onPress={onReset}>
          <AccessoryIcon name="xmark.circle.fill" size={16} color="secondary" />
        </PressableOpacity>
      )}
    </View>
  );
}

function RowButton({
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

const Row = {
  Container: Container,
  PressableContainer: PressableContainer,
  SwipeableContainer: SwipeableContainer,
  Label: Label,
  Content: Content,
  Trailing: Trailing,
  TrailingMenu,
  AccessoryIcon,
  AccessoryLabel,
  DisclosureIndicator: AccessoryDisclosureIndicator,
  Button: RowButton,
  Switch: RowSwitch,
  TextInput: TextInput,
};

export default Row;

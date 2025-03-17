import { Children, cloneElement, type JSX, type ReactNode } from "react";
import { Text, type StyleProp, View, type ViewStyle } from "react-native";

import { useTheme } from "../hooks";

export interface SectionProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}

function SectionContainer({ children, style }: SectionProps) {
  return <View style={[{}, style]}>{children}</View>;
}

interface SectionHeaderProps {
  children: ReactNode;
}

function SectionHeader({ children }: SectionHeaderProps) {
  const { colors, typography } = useTheme();

  return (
    <Text
      style={[
        typography.bodyRegular,
        {
          fontSize: 13,
          lineHeight: 16,
          textTransform: "uppercase",
          color: colors.labelSecondary,
          marginBottom: 7,
          marginLeft: 16,
        },
      ]}
    >
      {children}
    </Text>
  );
}

interface SectionContentProps {
  children: ReactNode;
  rounded?: boolean;
}

function SectionContent({ children, rounded = true }: SectionContentProps) {
  const { colors, radius } = useTheme();

  const filteredChildren = Children.toArray(children).filter(
    (child): child is JSX.Element => child !== null
  );

  return (
    <View
      style={{
        borderRadius: rounded ? radius.rowContainer : undefined,
        overflow: "hidden",
      }}
    >
      {Children.map(filteredChildren, (child, index) => {
        return cloneElement(child, {
          rounded: false,
          style: [
            index === filteredChildren.length - 1
              ? undefined
              : {
                  borderBottomWidth: 1,
                  borderBottomColor: colors.separatorNonOpaque,
                },
          ],
        });
      })}
    </View>
  );
}

interface SectionFooterProps {
  children: string;
}

function SectionFooter({ children }: SectionFooterProps) {
  const { colors, typography } = useTheme();

  return (
    <Text
      style={[
        typography.bodyRegular,
        {
          color: colors.labelSecondary,
          fontSize: 13,
          lineHeight: 16,
          marginTop: 5,
          marginLeft: 16,
        },
      ]}
    >
      {children}
    </Text>
  );
}

const Section = {
  Container: SectionContainer,
  Header: SectionHeader,
  Footer: SectionFooter,
  Content: SectionContent,
};

export default Section;

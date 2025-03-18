import { Children, type JSX, type ReactNode, cloneElement } from "react";
import { View } from "react-native";

import { useTheme } from "../../hooks";

export interface SectionContentProps {
  children: ReactNode;
  rounded?: boolean;
}

export function SectionContent({
  children,
  rounded = true,
}: SectionContentProps) {
  const { colors, radius } = useTheme();

  const filteredChildren = Children.toArray(children).filter(
    (child): child is JSX.Element => null !== child
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

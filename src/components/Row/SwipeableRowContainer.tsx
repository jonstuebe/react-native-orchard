import Swipeable, {
  type SwipeableProps,
} from "react-native-gesture-handler/ReanimatedSwipeable";

import { RowContainer, type RowContainerProps } from "./RowContainer";

export interface SwipeableRowContainerProps
  extends Omit<RowContainerProps, "children">,
    SwipeableProps {}

export function SwipeableRowContainer({
  children,
  style,
  rounded = true,
  ...props
}: SwipeableRowContainerProps) {
  return (
    <Swipeable {...props}>
      <RowContainer style={style} rounded={rounded}>
        {children}
      </RowContainer>
    </Swipeable>
  );
}

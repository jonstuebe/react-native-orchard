import { useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";

import { useTheme } from "../../hooks";
import { PressableOpacity } from "../PressableOpacity";

export function SheetHeaderCloseButton() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <PressableOpacity
      onPress={() => {
        if (router.canDismiss()) {
          router.dismiss();
        }
      }}
    >
      <SymbolView
        name="xmark.circle.fill"
        size={30}
        tintColor={colors.fillVibrantSecondary}
      />
    </PressableOpacity>
  );
}

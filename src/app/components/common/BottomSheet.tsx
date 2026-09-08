import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { Text, View } from "react-native";
import { useDrawer } from "../../lib/context/global";

export default function BottomSheetComponent() {
  const { sheetRef } = useDrawer();

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={["25%", "50%", "90%"]}
        enablePanDownToClose
      >
        <BottomSheetView
          style={{
            flex: 1,
            padding: 24,
            alignItems: "center",
          }}
        >
          <Text>Sheet content</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

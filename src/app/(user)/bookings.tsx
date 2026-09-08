import { SlidersHorizontal } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheetComponent from "../components/common/BottomSheet";
import { InputComponent } from "../components/common/Input";
import Table from "../components/common/Table";
import { useDrawer } from "../lib/context/global";

export default function Patients() {
  const { openSheet } = useDrawer();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <BottomSheetComponent />
      <View className="flex-row items-center gap-2 mx-2 mt-8">
        <View className="flex-1">
          <InputComponent />
        </View>

        <Pressable
          className="h-12 w-12 items-center justify-center rounded-xl border border-gray-200"
          onPress={openSheet}
        >
          <SlidersHorizontal size={22} />
        </Pressable>
      </View>
      <View className=" mx-2 mt-10 h-full ">
        <Table />
      </View>
    </SafeAreaView>
  );
}

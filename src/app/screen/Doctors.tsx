import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/common/AppBar";
import { InputComponent } from "../components/common/Input";

export default function Doctors() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppBar title="Doctors" />

      <View className="flex-1 px-5 py-5">
        <InputComponent />
      </View>
    </SafeAreaView>
  );
}

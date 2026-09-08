import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/common/AppBar";
import { InputComponent } from "../components/common/Input";
import Table from "../components/common/Table";

export default function Patients() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppBar title="Patients" />

      <View className="flex-1 px-2 py-5">
        <InputComponent />
      </View>
      <View className="p-5 mt-10">
        <Table />
      </View>
    </SafeAreaView>
  );
}

import { Bell, Menu } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function HeaderComponent({ setShowDrawer }: any) {
  return (
    <View className="flex-row items-center justify-between px-5 pt-4">
      <View className="flex-row items-center gap-3">
        <Pressable className="h-11 w-11 items-center justify-center rounded-full bg-white">
          <Menu size={23} color="#111827" />
        </Pressable>

        <View>
          <Text className="text-sm text-gray-500">Welcome back</Text>

          <Text className="text-xl font-bold text-gray-900">John 👋</Text>
        </View>
      </View>

      <Pressable className="relative h-11 w-11 items-center justify-center rounded-full bg-white">
        <Bell size={22} color="#111827" />

        <View className="absolute right-3 top-2 h-2 w-2 rounded-full bg-red-500" />
      </Pressable>
    </View>
  );
}

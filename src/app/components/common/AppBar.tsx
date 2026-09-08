import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

interface AppBarProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode;
}

export default function AppBar({
  title,
  showBack = true,
  rightComponent,
}: AppBarProps) {
  return (
    <View className="h-16 w-full flex-row items-center  border-gray-200 bg-white px-4">
      {/* Left */}
      <View className="w-12 items-start justify-center">
        {showBack && (
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full"
          >
            <ChevronLeft size={28} color="#111827" strokeWidth={2.2} />
          </Pressable>
        )}
      </View>

      {/* Center */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold text-gray-900">{title}</Text>
      </View>

      {/* Right */}
      <View className="w-12 items-end justify-center">{rightComponent}</View>
    </View>
  );
}

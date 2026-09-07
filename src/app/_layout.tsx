import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerProvider } from "./lib/context/global";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode="system">
        <DrawerProvider>
          <Slot />
        </DrawerProvider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

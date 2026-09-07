// import {
//     Avatar,
//     AvatarFallbackText,
//     AvatarImage,
// } from "@/components/ui/avatar";
// import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
// import { Divider } from "@/components/ui/divider";
// import {
//     Drawer,
//     DrawerBackdrop,
//     DrawerBody,
//     DrawerContent,
//     DrawerHeader,
// } from "@/components/ui/drawer";
// import { Icon } from "@/components/ui/icon";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { VStack } from "@/components/ui/vstack";
// import { History, LogOut, Plus, Settings, Volume2 } from "lucide-react-native";
// import { useDrawer } from "../lib/context/global";

// export default function bookings() {
//   const { showDrawer, setShowDrawer } = useDrawer();

//   return (
//     <>
//       <Button
//         onPress={() => {
//           setShowDrawer(true);
//         }}
//       >
//         <ButtonText>Open Menu</ButtonText>
//       </Button>

//       <Drawer
//         isOpen={showDrawer}
//         onClose={() => {
//           setShowDrawer(false);
//         }}
//       >
//         <DrawerBackdrop />
//         <DrawerContent className="w-max pt-safe">
//           <DrawerHeader className="flex-row items-center justify-start gap-4">
//             <Avatar>
//               <AvatarFallbackText>User Image</AvatarFallbackText>

//               <AvatarImage
//                 source={{
//                   uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
//                 }}
//               />
//             </Avatar>

//             <VStack className="flex-1 ">
//               <Text size="sm">{"Safu"}</Text>

//               <Text size="sm" className="text-foreground/60">
//                 View profile
//               </Text>
//             </VStack>
//           </DrawerHeader>

//           <Divider className="my-2" />
//           <DrawerBody contentContainerClassName="gap-2">
//             <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
//               <Icon as={Plus} size="lg" className="text-foreground/60" />
//               <Text>Add account</Text>
//             </Pressable>
//             <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
//               <Icon as={History} size="lg" className="text-foreground/60" />
//               <Text>Recents</Text>
//             </Pressable>
//             <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
//               <Icon as={Volume2} size="lg" className="text-foreground/60" />
//               <Text>Your Updates</Text>
//             </Pressable>
//             <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
//               <Icon as={Settings} size="lg" className="text-foreground/60" />
//               <Text>Settings and Privacy</Text>
//             </Pressable>

//             <Button className="w-full gap-2" variant="outline">
//               <ButtonText>Logout</ButtonText>
//               <ButtonIcon as={LogOut} />
//             </Button>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

import { Text, View } from "react-native";

export default function bookings() {
  return (
    <View>
      <Text>bookings</Text>
    </View>
  );
}

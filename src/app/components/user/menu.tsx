import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import {
  Ambulance,
  Bell,
  Calendar,
  ChevronDown,
  ChevronRight,
  Droplet,
  FileText,
  Mail,
  Stethoscope,
  User,
  UserCog,
  Users,
  UserShield,
  Wallet,
} from "lucide-react-native";
import { useState } from "react";
import { useDrawer } from "../../lib/context/global";

export default function Sidemenu() {
  const { showDrawer, setShowDrawer } = useDrawer();
  const [selectedMenu, setSelectedMenu] = useState<string>("Dashboard");
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    if (expandedMenu === label) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(label);
    }
  };

  const handleMenuSelect = (label: string) => {
    setSelectedMenu(label);
    // Navigate to page
    setShowDrawer(false);
  };

  // Menu items with sub-items only for specific sections
  const menuItems = [
    {
      icon: User,
      label: "Patients",
      route: "/screen/Patients",
    },
    {
      icon: Stethoscope,
      label: "Doctors",
      route: "/screen/Doctors",
    },
    {
      icon: Calendar,
      label: "Appointments",
      route: "/screen/Appointments",
    },
    {
      icon: Wallet,
      label: "Visits",
      route: "/screen/Visits",
    },
    {
      icon: Ambulance,
      label: "Ambulance",
      route: "/screen/Ambulance",
    },
    {
      icon: Droplet,
      label: "Blood Bank",
      route: "/screen/BloodBank",
    },
    {
      icon: Users,
      label: "Staff",
      route: "/screen/Staff",
    },
    {
      icon: Bell,
      label: "Notifications",
      subItems: [
        {
          icon: Mail,
          label: "Email Notifications",
          route: "/screen/Notifications",
        },
        {
          icon: FileText,
          label: "Email Templates",
          route: "/screen/EmailTemplates",
        },
      ],
    },
    {
      icon: UserCog,
      label: "User Management",
      subItems: [
        {
          icon: Users,
          label: "Users",
          route: "/screen/users",
        },
        {
          icon: UserShield,
          label: "Group Permissions",
          route: "/screen/group-permissions",
        },
      ],
    },
  ];

  return (
    <Drawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} size="sm">
      <DrawerBackdrop />
      <DrawerContent className="w-[320px] md:w-[380px] bg-white shadow-2xl">
        {/* Header with gradient */}
        <DrawerHeader className="p-6 m-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl">
          <VStack space="md" className="items-center">
            <Avatar className="w-24 h-24 border-4 mt-5 border-white shadow-lg">
              <AvatarFallbackText>User Image</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              />
            </Avatar>
            <VStack className="items-center">
              <Text size="xl" className="font-bold text-black">
                Dr. Sarah Johnson
              </Text>
              <Text size="sm" className="text-black">
                sarah.johnson@hospital.com
              </Text>
            </VStack>
          </VStack>
        </DrawerHeader>

        <Divider className="my-0" />

        <DrawerBody className="px-3 py-4 bg-gray-50">
          <VStack space="sm">
            {menuItems.map((item, index) => {
              const isSelected = selectedMenu === item.label;
              const isExpanded = expandedMenu === item.label;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <Box key={index}>
                  {/* <Pressable
                    onPress={() => {
                      if (hasSubItems) {
                        toggleMenu(item.label);
                        router.push("/screen/Patients");
                      } else {
                        handleMenuSelect(item.label);
                      }
                    }}
                    className={`flex-row items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                      isSelected && !hasSubItems
                        ? "bg-blue-600 shadow-md"
                        : isExpanded
                          ? "bg-blue-50 border border-blue-200"
                          : "hover:bg-white hover:shadow-sm"
                    }`}
                  > */}

                  <Pressable
                    onPress={() => {
                      if (hasSubItems) {
                        toggleMenu(item.label);
                        return;
                      }

                      setSelectedMenu(item.label);
                      setShowDrawer(false);

                      if (item.route) {
                        router.push(item.route as any);
                      }
                    }}
                    className={`flex-row items-center justify-between px-4 py-3 rounded-xl ${
                      isSelected && !hasSubItems
                        ? "bg-blue-600"
                        : isExpanded
                          ? "bg-blue-50 border border-blue-200"
                          : "bg-white"
                    }`}
                  >
                    <HStack space="sm" className="items-center flex-1">
                      <Box
                        className={`p-2 rounded-lg ${
                          isSelected && !hasSubItems
                            ? "bg-white/20"
                            : isExpanded
                              ? "bg-blue-500"
                              : "bg-gray-100"
                        }`}
                      >
                        <Icon
                          as={item.icon}
                          size="sm"
                          className={`${
                            isSelected && !hasSubItems
                              ? "text-white"
                              : isExpanded
                                ? "text-white"
                                : "text-gray-600"
                          }`}
                        />
                      </Box>
                      <Text
                        size="md"
                        className={`font-medium ${
                          isSelected && !hasSubItems
                            ? "text-white"
                            : isExpanded
                              ? "text-blue-700"
                              : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Text>
                    </HStack>
                    {hasSubItems && (
                      <Icon
                        as={isExpanded ? ChevronDown : ChevronRight}
                        size="sm"
                        className={`${
                          isExpanded ? "text-blue-600" : "text-gray-400"
                        }`}
                      />
                    )}
                  </Pressable>

                  {/* Sub-items with animation - Only for Notifications and User Management */}
                  {hasSubItems && isExpanded && (
                    <VStack
                      space="xs"
                      className="ml-12 mt-1 border-l-2 border-blue-200 pl-3"
                    >
                      {item.subItems!.map((subItem, subIndex) => {
                        const isSubSelected = selectedMenu === subItem.label;
                        return (
                          <Pressable
                            key={subIndex}
                            onPress={() => {
                              setSelectedMenu(subItem.label);
                              setShowDrawer(false);
                            }}
                            className={`flex-row items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-150 ${
                              isSubSelected ? "bg-blue-100" : "hover:bg-blue-50"
                            }`}
                          >
                            <Icon
                              as={subItem.icon}
                              size="sm"
                              className={`${
                                isSubSelected
                                  ? "text-blue-600"
                                  : "text-gray-500"
                              }`}
                            />
                            <Text
                              size="sm"
                              className={`${
                                isSubSelected
                                  ? "text-blue-700 font-medium"
                                  : "text-gray-600"
                              }`}
                            >
                              {subItem.label}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </VStack>
                  )}
                </Box>
              );
            })}

            {/* Divider before logout */}
            <Box className="my-2">
              <Divider className="my-0" />
            </Box>

            {/* Footer */}
            <Box className="mt-4 px-4 py-2">
              <Text size="xs" className="text-center text-gray-400">
                Version 2.0.1 • © 2024 Hospital System
              </Text>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

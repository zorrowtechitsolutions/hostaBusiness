import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    Bell,
    ChevronRight,
    CircleHelp,
    FileText,
    Pencil,
    Settings,
    ShieldCheck
} from "lucide-react-native";

type AccountItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

function AccountItem({ icon, title, subtitle, onPress }: AccountItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center px-4 py-3.5 bg-white border-b border-gray-100"
    >
      {/* Icon */}
      <View className="w-7 items-center justify-center">{icon}</View>

      {/* Text */}
      <View className="flex-1 ml-4">
        <Text className="text-[13px] font-medium text-black">{title}</Text>

        {subtitle && (
          <Text className="mt-0.5 text-[9px] leading-[12px] text-gray-500">
            {subtitle}
          </Text>
        )}
      </View>

      <ChevronRight size={20} color="#111" strokeWidth={1.5} />
    </Pressable>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <View className="mt-4">
      <Text className="mb-2 px-0.5 text-[13px] font-medium text-black">
        {title}
      </Text>

      <View className="overflow-hidden rounded-[14px] bg-white shadow-sm">
        {children}
      </View>
    </View>
  );
}

export default function profile() {
  return (
    <View className="flex-1 bg-[#FCFBF7]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 38,
          paddingBottom: 150,
        }}
      >
        {/* Header */}
        <Text className="mb-5 mt-5 text-[16px] font-semibold text-black">
          Account
        </Text>

        {/* Profile Card */}
        <View className="flex-row items-center rounded-[15px] bg-white px-3.5 py-3 shadow-sm">
          {/* Profile image */}

          <Avatar>
            <AvatarFallbackText>Jane Doe is test</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>

          {/* User information */}
          <View className="ml-2.5 flex-1">
            <Text className="text-[15px] font-semibold text-black">Emma</Text>

            <Text className="mt-0.5 text-[9px] text-black">+91 39860843</Text>
          </View>

          {/* Edit button */}
          <Pressable className="flex-row items-center rounded-full border border-gray-500 px-2.5 py-1">
            <Text className="mr-1 text-[7px] text-black">Edit Profile</Text>

            <Pencil size={10} color="#111" strokeWidth={1.5} />
          </Pressable>
        </View>

        {/* Grow With Us */}

        {/* Preferences */}
        <Section title="Preferences">
          <AccountItem
            icon={<Bell size={19} color="#111" strokeWidth={1.5} />}
            title="Notification"
          />

          <AccountItem
            icon={<Settings size={19} color="#111" strokeWidth={1.5} />}
            title="App Settings"
          />
        </Section>

        {/* Help */}
        <Section title="Preferences">
          <AccountItem
            icon={<CircleHelp size={19} color="#111" strokeWidth={1.5} />}
            title="Help & Support"
          />

          <AccountItem
            icon={<FileText size={19} color="#111" strokeWidth={1.5} />}
            title="Terms & Conditions"
          />

          <AccountItem
            icon={<ShieldCheck size={19} color="#111" strokeWidth={1.5} />}
            title="Privacy & Security"
          />
        </Section>

        {/* Logout */}

        <View className="mt-4">{/* button */}</View>
      </ScrollView>
    </View>
  );
}

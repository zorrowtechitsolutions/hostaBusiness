import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Droplets,
  Stethoscope,
  UserRound,
  UsersRound,
} from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/ui/text";
import HeaderComponent from "../components/common/Header";
import Sidemenu from "../components/user/menu";

export default function Dashboard() {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F8FB]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <Sidemenu />

        {/* ───────────────── Header ───────────────── */}
        <HeaderComponent />

        {/* ───────────────── Appointment Request ───────────────── */}
        <View className="mx-5 mt-6 overflow-hidden rounded-[26px] bg-black p-5">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <View className="flex-row items-center gap-2">
                <View className="h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                  <CalendarDays size={19} color="#FFFFFF" />
                </View>

                <Text className="text-sm font-medium text-blue-100">
                  Appointment Request
                </Text>
              </View>

              <Text className="mt-4 text-4xl font-bold text-white">24</Text>

              <Text className="mt-1 text-sm text-blue-100">
                New requests waiting for approval
              </Text>
            </View>

            <View className="rounded-full bg-white/15 px-3 py-1.5">
              <Text className="text-xs font-semibold text-white">Today</Text>
            </View>
          </View>

          <Pressable className="mt-5 flex-row items-center justify-center gap-2 rounded-2xl bg-white py-3.5">
            <Text className="text-sm font-bold text-[#1769E0]">
              View Requests
            </Text>

            <ChevronRight size={17} color="#1769E0" />
          </Pressable>
        </View>

        {/* ───────────────── Patients Statistics ───────────────── */}
        <SectionHeader title="Patients Statistics" />

        <View className="mx-5 flex-row gap-3">
          <StatCard
            icon={<UsersRound size={21} color="#1769E0" />}
            iconBg="bg-blue-50"
            title="Patients"
            value="1,248"
            change="+12.5%"
          />
          <StatCard
            icon={<CalendarDays size={21} color="#7C3AED" />}
            iconBg="bg-purple-50"
            title="Appoinments"
            value="86"
            change="+8.2%"
          />

          <StatCard
            icon={<Stethoscope size={21} color="#7C3AED" />}
            iconBg="bg-purple-50"
            title="Doctors"
            value="86"
            change="+8.2%"
          />
        </View>

        {/* ───────────────── Blood Bank ───────────────── */}
        <SectionHeader title="Blood Bank" />

        <View className="mx-5 rounded-[24px] bg-white p-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                <Droplets size={22} color="#E11D48" />
              </View>

              <View>
                <Text className="text-base font-bold text-gray-900">
                  Blood Stock
                </Text>

                <Text className="mt-0.5 text-xs text-gray-400">
                  Current availability
                </Text>
              </View>
            </View>

            <Pressable className="flex-row items-center gap-1">
              <Text className="text-xs font-semibold text-[#1769E0]">
                View all
              </Text>

              <ChevronRight size={15} color="#1769E0" />
            </Pressable>
          </View>

          <View className="mt-5 flex-row justify-between">
            <BloodType type="A+" amount="18" />
            <BloodType type="A-" amount="08" />
            <BloodType type="B+" amount="24" />
            <BloodType type="B-" amount="05" />
            <BloodType type="O+" amount="31" />
            <BloodType type="O-" amount="07" />
          </View>
        </View>

        {/* ───────────────── Patient Visits ───────────────── */}
        <SectionHeader title="Patient Visits" />

        <View className="mx-5 flex-row gap-3">
          <VisitCard
            icon={<CalendarDays size={20} color="#1769E0" />}
            iconBg="bg-blue-50"
            value="156"
            title="Today's Visits"
          />

          <VisitCard
            icon={<Clock3 size={20} color="#D97706" />}
            iconBg="bg-orange-50"
            value="38"
            title="Waiting"
          />

          <VisitCard
            icon={<CheckCircle2 size={20} color="#16A34A" />}
            iconBg="bg-green-50"
            value="118"
            title="Completed"
          />
        </View>

        {/* ───────────────── Doctors ───────────────── */}
        <SectionHeader title="Doctors" />

        <View className="mx-5 rounded-[24px] bg-white p-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
                <Stethoscope size={22} color="#1769E0" />
              </View>

              <View>
                <Text className="text-base font-bold text-gray-900">
                  Medical Team
                </Text>

                <Text className="mt-0.5 text-xs text-gray-400">
                  Doctor availability
                </Text>
              </View>
            </View>

            <Text className="text-sm font-bold text-gray-900">42 Doctors</Text>
          </View>

          <View className="mt-5 flex-row">
            <DoctorStatus number="28" title="Available" dot="bg-green-500" />

            <DoctorStatus
              number="09"
              title="With Patient"
              dot="bg-orange-500"
            />

            <DoctorStatus number="05" title="Off Duty" dot="bg-gray-400" />
          </View>
        </View>

        {/* ───────────────── Patient Record ───────────────── */}

        <View className="mt-7 flex-row items-center justify-between px-5">
          <Text className="text-lg font-bold text-gray-900">
            Patient Record
          </Text>

          <Pressable className="flex-row items-center gap-1">
            <Text className="text-sm font-semibold text-[#1769E0]">
              See All
            </Text>

            <ChevronRight size={17} color="#1769E0" />
          </Pressable>
        </View>

        <View className="mx-5 mt-4 overflow-hidden rounded-[24px] bg-white">
          <Appointment
            time="09:30 AM"
            patient="Rahul Kumar"
            doctor="Dr. Ahmed"
            department="Cardiology"
            status="Confirmed"
          />

          <Appointment
            time="10:15 AM"
            patient="Ameen P"
            doctor="Dr. Sarah"
            department="Dermatology"
            status="Pending"
          />

          <Appointment
            time="11:00 AM"
            patient="Shihab K"
            doctor="Dr. John"
            department="Orthopedic"
            status="Confirmed"
          />

          <Appointment
            time="11:45 AM"
            patient="Fathima M"
            doctor="Dr. Ali"
            department="Neurology"
            status="Cancelled"
          />
        </View>

        {/* ───────────────── Latest Appointments ───────────────── */}
        <View className="mt-7 flex-row items-center justify-between px-5">
          <Text className="text-lg font-bold text-gray-900">
            Latest Appointments
          </Text>

          <Pressable className="flex-row items-center gap-1">
            <Text className="text-sm font-semibold text-[#1769E0]">
              See All
            </Text>

            <ChevronRight size={17} color="#1769E0" />
          </Pressable>
        </View>

        <View className="mx-5 mt-4 overflow-hidden rounded-[24px] bg-white">
          <Appointment
            time="09:30 AM"
            patient="Rahul Kumar"
            doctor="Dr. Ahmed"
            department="Cardiology"
            status="Confirmed"
          />

          <Appointment
            time="10:15 AM"
            patient="Ameen P"
            doctor="Dr. Sarah"
            department="Dermatology"
            status="Pending"
          />

          <Appointment
            time="11:00 AM"
            patient="Shihab K"
            doctor="Dr. John"
            department="Orthopedic"
            status="Confirmed"
          />

          <Appointment
            time="11:45 AM"
            patient="Fathima M"
            doctor="Dr. Ali"
            department="Neurology"
            status="Cancelled"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ───────────────── Components ───────────────── */

function SectionHeader({ title }: { title: string }) {
  return (
    <View className="mb-4 mt-7 px-5">
      <Text className="text-lg font-bold text-gray-900">{title}</Text>
    </View>
  );
}

function StatCard({
  icon,
  iconBg,
  title,
  value,
  change,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  value: string;
  change: string;
}) {
  return (
    <View className="flex-1 rounded-[22px] bg-white p-4">
      <View className="flex-row items-center justify-between">
        <View
          className={`h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
        >
          {icon}
        </View>

        <Text className="text-[10px] font-semibold text-green-600">
          {change}
        </Text>
      </View>

      <Text className="mt-4 text-xs text-gray-400">{title}</Text>

      <Text className="mt-1 text-xl font-bold text-gray-900">{value}</Text>
    </View>
  );
}

function BloodType({ type, amount }: { type: string; amount: string }) {
  return (
    <View className="items-center">
      <View className="h-11 w-11 items-center justify-center rounded-full bg-red-50">
        <Text className="text-xs font-bold text-red-600">{type}</Text>
      </View>

      <Text className="mt-2 text-sm font-bold text-gray-900">{amount}</Text>

      <Text className="text-[10px] text-gray-400">units</Text>
    </View>
  );
}

function VisitCard({
  icon,
  iconBg,
  value,
  title,
}: {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  title: string;
}) {
  return (
    <View className="flex-1 rounded-[22px] bg-white p-4">
      <View
        className={`h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
      >
        {icon}
      </View>

      <Text className="mt-4 text-xl font-bold text-gray-900">{value}</Text>

      <Text className="mt-1 text-[11px] text-gray-400">{title}</Text>
    </View>
  );
}

function DoctorStatus({
  number,
  title,
  dot,
}: {
  number: string;
  title: string;
  dot: string;
}) {
  return (
    <View className="flex-1">
      <Text className="text-xl font-bold text-gray-900">{number}</Text>

      <View className="mt-1 flex-row items-center gap-1.5">
        <View className={`h-2 w-2 rounded-full ${dot}`} />

        <Text className="text-[10px] text-gray-400">{title}</Text>
      </View>
    </View>
  );
}

function RecordCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <View className="flex-1 flex-row items-center rounded-[22px] bg-white p-4">
      <View className="h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
        {icon}
      </View>

      <View className="ml-3">
        <Text className="text-xs text-gray-400">{title}</Text>

        <Text className="mt-0.5 text-lg font-bold text-gray-900">{value}</Text>
      </View>
    </View>
  );
}

function Appointment({
  time,
  patient,
  doctor,
  department,
  status,
}: {
  time: string;
  patient: string;
  doctor: string;
  department: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}) {
  const statusStyle =
    status === "Confirmed"
      ? "bg-green-50 text-green-600"
      : status === "Pending"
        ? "bg-orange-50 text-orange-600"
        : "bg-red-50 text-red-600";

  return (
    <Pressable className="border-b border-gray-100 px-5 py-4">
      <View className="flex-row items-center">
        {/* Time */}
        <View className="w-[68px]">
          <Text className="text-xs font-bold text-[#1769E0]">{time}</Text>
        </View>

        {/* Patient */}
        <View className="ml-2 h-10 w-10 items-center justify-center rounded-full bg-blue-50">
          <UserRound size={18} color="#1769E0" />
        </View>

        <View className="ml-3 flex-1">
          <Text className="text-sm font-bold text-gray-900">{patient}</Text>

          <Text className="mt-1 text-[11px] text-gray-400">
            {doctor} • {department}
          </Text>
        </View>

        {/* Status */}
        <View
          className={`rounded-full px-2.5 py-1.5 ${statusStyle.split(" ")[0]}`}
        >
          <Text className={`text-[9px] font-bold ${statusStyle.split(" ")[1]}`}>
            {status}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs
      labelVisibilityMode="unlabeled"
      backgroundColor="#FFFFFF"
      iconColor={{
        default: "#777777",
        selected: "#000000",
      }}
      indicatorColor="transparent"
      rippleColor="transparent"
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          src={require("../../../assets/images/icons/dashboard.png")}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="bookings">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          src={require("../../../assets/images/icons/calendar.png")}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

import { SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { View } from "react-native";

export function InputComponent() {
  return (
    <View>
      <Input className="h-14 w-full rounded-2xl border-2 bg-muted px-3 my-2">
        <InputSlot className="pl-1">
          <InputIcon as={SearchIcon} size="md" className=" text-black" />
        </InputSlot>

        <InputField
          placeholder="Search"
          className="ml-2 text-base text-foreground"
          placeholderTextColor="#9CA3AF"
        />
      </Input>
    </View>
  );
}

import { Clock3, Heart, MapPin, Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import ButtonComponent from "./Button";

// 360px

export function CardComponent({
  shop,
  shopShown,
  primaryButtonText,
  secondaryButtonText,
  offerShown,
}: {
  shop: any;
  shopShown?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  offerShown?: boolean;
}) {
  return (
    <View
      className={`${shopShown ? "w-max-[400px] " : "w-[360px] "} shrink-0 rounded-[22px] bg-white p-4 shadow-sm`}
    >
      {shopShown && !offerShown ? (
        <Image
          source={shop.image}
          className="h-[132px] w-[100%] shrink-0 rounded-[14px]"
          resizeMode="cover"
        />
      ) : null}

      {/* Top section */}
      <View className="flex-row ">
        {/* Image */}

        {!shopShown || offerShown ? (
          <Image
            source={shop.image}
            className="h-[112px] w-[140px] shrink-0 rounded-[14px]"
            resizeMode="cover"
          />
        ) : null}

        {/* Details */}
        <View className="ml-4 min-w-0 flex-1">
          {/* Name + Rating */}
          <View className="flex-row items-start justify-between">
            <View className="min-w-0 flex-1 pr-2">
              <Text
                className={`text-[23px] ${shopShown ? "mt-3" : ""} font-semibold text-black`}
                numberOfLines={1}
              >
                {offerShown ? shop.offer : shop.name}
              </Text>

              {shopShown ? null : (
                <Text
                  className="mt-0.5 text-[15px] text-gray-700"
                  numberOfLines={1}
                >
                  {shop.shop}
                </Text>
              )}
            </View>

            {/* Rating + Heart */}
            <View className="flex-row items-center gap-2">
              {offerShown ? null : (
                <View
                  className={`flex-row items-center ${shopShown ? "mt-3" : ""}`}
                >
                  <Star size={18} color="#9A7417" fill="#9A7417" />

                  <Text className="ml-1 text-[15px] font-semibold text-black">
                    {shop.rating}
                  </Text>
                </View>
              )}

              {shopShown ? null : (
                <Pressable className="h-11 w-11 items-center  justify-center rounded-full bg-gray-100">
                  <Heart size={22} color="black" fill="black" />
                </Pressable>
              )}
            </View>
          </View>

          {/* Service / Price */}

          {shopShown ? null : (
            <View className="mt-3 flex-row items-center">
              <Text className="text-[15px] text-gray-700" numberOfLines={1}>
                {shop.service}
              </Text>

              <Text className="mx-2 text-[15px] text-gray-700">•</Text>

              <Text className="text-[15px] text-gray-700">{shop.price}</Text>
            </View>
          )}

          {offerShown ? (
            <View className="mt-3 flex-row items-center">
              <View className="">
                <Text className="text-[15px] text-gray-700" numberOfLines={1}>
                  {shop.service}
                </Text>

                <Text className="text-[15px] text-gray-700">₹{shop.price}</Text>
                <View
                  className={`flex-row items-center ${shopShown ? "mt-3" : ""}`}
                >
                  <Star size={18} color="#9A7417" fill="#9A7417" />

                  <Text className="ml-1 text-[15px] font-semibold text-black">
                    {shop.rating}
                  </Text>
                </View>
              </View>
            </View>
          ) : null}

          {/* Experience / Distance */}
          <View className="mt-3 flex-row">
            {offerShown ? null : (
              <>
                <View className="mr-2 flex-row items-center rounded-md bg-gray-100 px-2 py-1">
                  <Clock3 size={13} color="#777" />

                  <Text className="ml-1 text-[12px] text-gray-600">
                    {shop.experience}
                  </Text>
                </View>

                <View className="flex-row items-center rounded-md bg-gray-100 px-2 py-1">
                  <MapPin size={13} color="#777" />

                  <Text className="ml-1 text-[12px] text-gray-600">
                    {shop.distance}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>

      {shopShown ? (
        <Pressable className="h-11 w-11 items-center absolute right-7 top-6 justify-center rounded-full bg-gray-100">
          <Heart size={22} color="black" fill="black" />
        </Pressable>
      ) : null}

      {/* Buttons */}
      <View className="mt-1">
        <ButtonComponent />
      </View>
    </View>
  );
}

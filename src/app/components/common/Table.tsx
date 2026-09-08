import { useCallback, useRef, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  email: string;
}

const statusColorMap: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  "On Leave": "bg-yellow-100 text-yellow-700",
};

const allUsers: User[] = [
  {
    email: "kate@acme.com",
    id: 1,
    name: "Kate Moore",
    role: "CEO",
    status: "Active",
  },
  {
    email: "john@acme.com",
    id: 2,
    name: "John Smith",
    role: "CTO",
    status: "Active",
  },
  {
    email: "sara@acme.com",
    id: 3,
    name: "Sara Johnson",
    role: "CMO",
    status: "On Leave",
  },
  {
    email: "michael@acme.com",
    id: 4,
    name: "Michael Brown",
    role: "CFO",
    status: "Active",
  },
  {
    email: "emily@acme.com",
    id: 5,
    name: "Emily Davis",
    role: "Product Manager",
    status: "Inactive",
  },
  {
    email: "davis@acme.com",
    id: 6,
    name: "Davis Wilson",
    role: "Lead Designer",
    status: "Active",
  },
  {
    email: "olivia@acme.com",
    id: 7,
    name: "Olivia Martinez",
    role: "Frontend Engineer",
    status: "Active",
  },
  {
    email: "james@acme.com",
    id: 8,
    name: "James Taylor",
    role: "Backend Engineer",
    status: "Active",
  },
  {
    email: "sophia@acme.com",
    id: 9,
    name: "Sophia Anderson",
    role: "QA Engineer",
    status: "On Leave",
  },
  {
    email: "liam@acme.com",
    id: 10,
    name: "Liam Thomas",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    email: "lucas@acme.com",
    id: 11,
    name: "Lucas Martinez",
    role: "Product Manager",
    status: "Active",
  },
  {
    email: "emma@acme.com",
    id: 12,
    name: "Emma Johnson",
    role: "Frontend Engineer",
    status: "Active",
  },
  {
    email: "kate@acme.com",
    id: 13,
    name: "Kate Moore",
    role: "CEO",
    status: "Active",
  },
  {
    email: "john@acme.com",
    id: 14,
    name: "John Smith",
    role: "CTO",
    status: "Active",
  },
  {
    email: "sara@acme.com",
    id: 15,
    name: "Sara Johnson",
    role: "CMO",
    status: "On Leave",
  },
  {
    email: "michael@acme.com",
    id: 16,
    name: "Michael Brown",
    role: "CFO",
    status: "Active",
  },
  {
    email: "emily@acme.com",
    id: 17,
    name: "Emily Davis",
    role: "Product Manager",
    status: "Inactive",
  },
  {
    email: "davis@acme.com",
    id: 18,
    name: "Davis Wilson",
    role: "Lead Designer",
    status: "Active",
  },
  {
    email: "olivia@acme.com",
    id: 19,
    name: "Olivia Martinez",
    role: "Frontend Engineer",
    status: "Active",
  },
  {
    email: "james@acme.com",
    id: 20,
    name: "James Taylor",
    role: "Backend Engineer",
    status: "Active",
  },
  {
    email: "sophia@acme.com",
    id: 21,
    name: "Sophia Anderson",
    role: "QA Engineer",
    status: "On Leave",
  },
  {
    email: "liam@acme.com",
    id: 22,
    name: "Liam Thomas",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    email: "lucas@acme.com",
    id: 23,
    name: "Lucas Martinez",
    role: "Product Manager",
    status: "Active",
  },
  {
    email: "emma@acme.com",
    id: 24,
    name: "Emma Johnson",
    role: "Frontend Engineer",
    status: "Active",
  },
];

const ITEMS_PER_PAGE = 10;

const columns = [
  { id: "name", name: "Name", width: 170 },
  { id: "role", name: "Role", width: 180 },
  { id: "status", name: "Status", width: 130 },
  { id: "email", name: "Email", width: 220 },
];

export default function Table() {
  const [items, setItems] = useState<User[]>(allUsers.slice(0, ITEMS_PER_PAGE));

  const [isLoading, setIsLoading] = useState(false);

  const isLoadingRef = useRef(false);

  const hasMore = items.length < allUsers.length;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoadingRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);

    setTimeout(() => {
      setItems((prev) => allUsers.slice(0, prev.length + ITEMS_PER_PAGE));

      setIsLoading(false);
      isLoadingRef.current = false;
    }, 1500);
  }, [hasMore]);

  return (
    <View className="w-full h-[70%]  overflow-hidden rounded-xl  border-gray-200 bg-white">
      {/* Horizontal Scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="min-w-[700px]">
          {/* Header */}
          <View className="flex-row border-b border-gray-200 bg-gray-50">
            {columns.map((column) => (
              <View
                key={column.id}
                style={{ width: column.width }}
                className="h-12 justify-center px-4"
              >
                <Text className="text-sm font-semibold text-gray-700">
                  {column.name}
                </Text>
              </View>
            ))}
          </View>

          {/* Rows */}
          <ScrollView
            className="h-[280px]"
            showsVerticalScrollIndicator={true}
            onScroll={({ nativeEvent }) => {
              const { layoutMeasurement, contentOffset, contentSize } =
                nativeEvent;

              const isNearBottom =
                layoutMeasurement.height + contentOffset.y >=
                contentSize.height - 50;

              if (isNearBottom) {
                loadMore();
              }
            }}
            scrollEventThrottle={400}
          >
            {items.map((user) => (
              <View key={user.id} className="flex-row border-b border-gray-100">
                {/* Name */}
                <View
                  style={{ width: columns[0].width }}
                  className="h-14 justify-center px-4"
                >
                  <Text
                    numberOfLines={1}
                    className="text-sm font-medium text-gray-900"
                  >
                    {user.name}
                  </Text>
                </View>

                {/* Role */}
                <View
                  style={{ width: columns[1].width }}
                  className="h-14 justify-center px-4"
                >
                  <Text numberOfLines={1} className="text-sm text-gray-600">
                    {user.role}
                  </Text>
                </View>

                {/* Status */}
                <View
                  style={{ width: columns[2].width }}
                  className="h-14 justify-center px-4"
                >
                  <View
                    className={`self-start rounded-full px-3 py-1 ${
                      statusColorMap[user.status]?.split(" ")[0] ??
                      "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`text-xs font-medium ${
                        statusColorMap[user.status]?.split(" ")[1] ??
                        "text-gray-700"
                      }`}
                    >
                      {user.status}
                    </Text>
                  </View>
                </View>

                {/* Email */}
                <View
                  style={{ width: columns[3].width }}
                  className="h-14 justify-center px-4"
                >
                  <Text numberOfLines={1} className="text-sm text-gray-600">
                    {user.email}
                  </Text>
                </View>
              </View>
            ))}

            {/* Loading */}
            {hasMore && (
              <View className="h-16 items-center justify-center">
                {isLoading && (
                  <ActivityIndicator size="small" color="#2563EB" />
                )}
              </View>
            )}

            {/* End */}
            {!hasMore && (
              <View className="h-14 items-center justify-center">
                <Text className="text-xs text-gray-400">No more users</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

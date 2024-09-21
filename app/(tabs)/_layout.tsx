import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Explore",
                    title: "Explore",
                    tabBarIcon: ({ size, color }) => <AntDesign name="search1" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="wishlist"
                options={{
                    tabBarLabel: "Wishlist",
                    title: "Wishlist",
                    tabBarIcon: ({ size, color }) => <AntDesign name="hearto" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="trips"
                options={{
                    tabBarLabel: "Trips",
                    title: "Trips",
                    tabBarIcon: ({ size, color }) => <FontAwesome6 name="airbnb" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    tabBarLabel: "Inbox",
                    title: "Inbox",
                    tabBarIcon: ({ size, color }) => <Ionicons name="chatbox-outline" size={size} color={color} />,
                }}
            />{" "}
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    title: "Profile",
                    tabBarIcon: ({ size, color }) => <FontAwesome6 name="user-circle" size={size} color={color} />,
                }}
            />
        </Tabs>
    );
}

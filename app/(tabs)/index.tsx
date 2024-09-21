import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function index() {
    return (
        <View>
            <Text
                style={{
                    flexDirection: "column",
                    gap: 10,
                }}>
                <Link href="/(modals)/login">Go to link</Link>
                <Link href="/(modals)/booking">Go to link</Link>
            </Text>
        </View>
    );
}

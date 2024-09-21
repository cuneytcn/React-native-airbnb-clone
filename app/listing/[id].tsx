import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function index() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>This page : {id}</Text>
        </View>
    );
}

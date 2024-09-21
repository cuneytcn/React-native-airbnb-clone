import React from "react";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { Pressable } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function RootLayout() {
    const router = useRouter();

    const [loaded, error] = useFonts({
        "font-base": require("../assets/fonts/PlaypenSans-Regular.ttf"),
        "font-medium": require("../assets/fonts/PlaypenSans-Medium.ttf"),
        "font-semibold": require("../assets/fonts/PlaypenSans-SemiBold.ttf"),
        "font-bold": require("../assets/fonts/PlaypenSans-Bold.ttf"),
    });

    React.useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(modals)/login"
                options={{
                    title: "Login or Singup",
                    headerTitleStyle: {
                        fontFamily: "font-base",
                    },
                    presentation: "modal",
                    headerLeft: () => (
                        <Pressable style={{ marginRight: 32 }} onPress={() => router.back()}>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                    ),
                }}
            />
            <Stack.Screen
                name="listing/[id]"
                options={{
                    headerTitle: "",
                }}
            />
            <Stack.Screen
                name="(modals)/booking"
                options={{
                    presentation: "transparentModal",
                    headerLeft: () => (
                        <Pressable style={{ marginRight: 32 }} onPress={() => router.back()}>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                    ),
                }}
            />
        </Stack>
    );
}

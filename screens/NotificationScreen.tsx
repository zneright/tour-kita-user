import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation/types";
import TopHeader from "../components/TopHeader";
import BottomFooter from "../components/BottomFooter";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Notification">;

const notifications = [
    {
        id: 1,
        message: "Muralla Street from San Francisco Street to Victoria Street is closed for repairs until November 20. Please use alternative routes.",
    },
    {
        id: 2,
        message: "Bambike is closed today. Please plan your visit accordingly and check for updates on their reopening schedule.",
    },
];

export default () => {

    const navigation = useNavigation<NavigationProp>();
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <TopHeader title="Notification" onSupportPress={() => navigation.navigate("Support")} />

            <ScrollView style={{ flex: 1, padding: 16 }}>
                {notifications.map((item) => (
                    <View
                        key={item.id}
                        style={{
                            backgroundColor: "#D6C0B3",
                            borderRadius: 10,
                            padding: 12,
                            marginBottom: 12,
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "#493628" }}>{item.message}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={{
                flexDirection: "row",
                backgroundColor: "#493628",
                justifyContent: "space-around",
                alignItems: "center",
                paddingVertical: 10,
            }}>
                <BottomFooter active="Notification" />
            </View>
        </SafeAreaView>
    );
};

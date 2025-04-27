<<<<<<< HEAD
import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FeedbackScreen = () => {
    const [email, setEmail] = useState("Tourkita@gmail.com");
    const [feedbackType, setFeedbackType] = useState("");
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [rating, setRating] = useState(4);
    const [comment, setComment] = useState("");

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i + 1)}>
                <Icon
                    name={i < rating ? "star" : "star-outline"}
                    size={28}
                    color="#E4B343"
                />
            </TouchableOpacity>
        ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Feedback</Text>

                <Text style={styles.label}>Tell us about or app or a location...</Text>
                <View style={styles.inputContainer}>
                    <Icon name="account" size={20} color="#4C372B" style={{ marginRight: 8 }} />
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        editable={false}
                    />
                </View>

                <Text style={styles.label}>Feedback Type</Text>
                <View style={styles.dropdownContainer}>
                    <Picker
                        selectedValue={feedbackType}
                        onValueChange={(itemValue) => {
                            setFeedbackType(itemValue);
                            setShowLocationDropdown(itemValue === "Location Feedback");
                        }}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="Select Feedback Type" value="" />
                        <Picker.Item label="App Feedback" value="App Feedback" />
                        <Picker.Item label="Location Feedback" value="Location Feedback" />
                    </Picker>
                </View>

                {showLocationDropdown && (
                    <>
                        <Text style={styles.label}>Enter Location</Text>
                        <View style={styles.inputContainer}>
                            <Icon name="map-marker" size={20} color="#4C372B" style={{ marginRight: 8 }} />
                            <TextInput
                                placeholder="Enter location name..."
                                value={selectedLocation}
                                onChangeText={setSelectedLocation}
                                style={styles.input}
                            />
                        </View>
                    </>
                )}

                <Text style={styles.label}>Rate your experience</Text>
                <View style={styles.starsRow}>{renderStars()}</View>

                <TextInput
                    style={[styles.input, styles.commentBox]}
                    placeholder="Add your comments..."
                    multiline
                    numberOfLines={4}
                    value={comment}
                    onChangeText={setComment}
                />

                <View style={styles.buttonRow}>
                    <TouchableOpacity>
                        <Text style={styles.cancelButton}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FeedbackScreen;
=======
import React from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TopHeader from "../components/TopHeader";

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation/types";
import BottomFooter from "../components/BottomFooter";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Maps">;

const SupportScreen = () => {

    const navigation = useNavigation<NavigationProp>();
    const handlePress = (label: string) => {
        Alert.alert(`${label} pressed`);
    };

    return (

        <SafeAreaView style={styles.container}>
            <TopHeader title="Support" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.row}>
                    <SupportBox
                        label="Call Us"
                        subtitle="Talk to our Executive"
                        icon="phone"
                        onPress={() => handlePress("Call Us")}
                    />
                    <SupportBox
                        label="Message Us"
                        subtitle="Mail to our Executive"
                        icon="email"
                        onPress={() => handlePress("Message Us")}
                    />
                </View>

                <SupportRow
                    label="FAQs Questions"
                    subtitle="Discover App Information"
                    icon="help-circle-outline"
                    onPress={() => handlePress("FAQs Questions")}
                />
                <SupportRow
                    label="Feedback"
                    subtitle="Tell us what you think about our app"
                    icon="message-text-outline"
                    onPress={() => navigation.navigate("Feedback")}
                />

            </ScrollView>
            <BottomFooter active="" />
        </SafeAreaView >
    );
};

const SupportBox = ({
    label,
    subtitle,
    icon,
    onPress,
}: {
    label: string;
    subtitle: string;
    icon: string;
    onPress: () => void;
}) => (
    <TouchableOpacity style={styles.box} onPress={onPress}>
        <Icon name={icon} size={32} color="#4C372B" />
        <Text style={styles.boxLabel}>{label}</Text>
        <Text style={styles.boxSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
);

const SupportRow = ({
    label,
    subtitle,
    icon,
    onPress,
}: {
    label: string;
    subtitle: string;
    icon: string;
    onPress: () => void;
}) => (
    <TouchableOpacity style={styles.rowBox} onPress={onPress}>
        <Icon name={icon} size={32} color="#4C372B" style={{ marginRight: 12 }} />
        <View>
            <Text style={styles.boxLabel}>{label}</Text>
            <Text style={styles.boxSubtitle}>{subtitle}</Text>
        </View>
    </TouchableOpacity>
);
>>>>>>> origin/main

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        backgroundColor: "#fff",
    },
    scrollContainer: {
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#4C372B",
        marginBottom: 16,
        alignSelf: "center",
    },
    label: {
        fontSize: 14,
        color: "#4C372B",
        marginBottom: 6,
        marginTop: 12,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#4C372B",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: "#4C372B",
    },
    commentBox: {
        height: 100,
        textAlignVertical: "top",
        marginTop: 10,
        borderColor: "#4C372B",
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: "#4C372B",
        borderRadius: 8,
        overflow: "hidden",
    },
    dropdown: {
        height: 50,
        color: "#4C372B",
    },
    starsRow: {
        flexDirection: "row",
        marginVertical: 10,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    cancelButton: {
        fontSize: 14,
        color: "#4C372B",
    },
    submitButton: {
        backgroundColor: "#4C372B",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    submitText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
});
=======
        backgroundColor: "#FFFFFF",
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 20,
    },

    headerText: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    box: {
        backgroundColor: "#E0DDDA",
        borderRadius: 12,
        width: "48%",
        alignItems: "center",
        paddingVertical: 20,
    },
    rowBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E0DDDA",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    boxLabel: {
        fontSize: 15,
        fontWeight: "600",
        color: "#4C372B",
        marginTop: 8,
    },
    boxSubtitle: {
        fontSize: 11,
        color: "#6B5E5E",
        textAlign: "center",
        marginTop: 2,
    },
});

export default SupportScreen;
>>>>>>> origin/main

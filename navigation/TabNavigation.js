import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../navigation/StackNavigation";
import Ionicons
    from "react-native-vector-icons/Ionicons";
import SavedItems from "../screens/Saved";

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: "purple",
                    tabBarInactiveTintColor: "gray",
                }}
            />
            <Tab.Screen
                name="Saved"
                component={SavedItems}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="bookmark-outline" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: "purple",
                    tabBarInactiveTintColor: "gray",
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;

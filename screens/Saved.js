import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Saved() {
    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
                setSavedMovies(favorites);
            } catch (error) {
                console.error("Error loading favorites:", error);
            }
        };
        loadFavorites();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Saved Movies</Text>

            {savedMovies.length === 0 ? (
                <Text>No saved movies found.</Text>
            ) : (
                <FlatList
                    data={savedMovies}
                    keyExtractor={(item, index) => item.imdbID || index.toString()}
                    renderItem={({ item }) => (
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 10,
                            backgroundColor: "#f8f8f8",
                            padding: 10,
                            borderRadius: 5
                        }}>
                            <Image source={{ uri: item.Poster }} style={{ width: 50, height: 75, marginRight: 10 }} />
                            <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.Title}</Text>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
}

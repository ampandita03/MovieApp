import React, { useEffect, useState } from 'react';
import {View, Text, Image, Button, Alert, Dimensions, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

export default function DetailsScreen({ route }) {
    const { height, width } = Dimensions.get("screen");
    const { movie } = route.params;
    const API_KEY = "48c3e766";
    const [details, setDetails] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const res = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
                setDetails(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovieDetails();
    }, []);

    const saveFavorite = async () => {
        try {
            const favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
            await AsyncStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
            Alert.alert('Movie saved!');
        } catch (error) {
            console.error(error);
        }
    };

    if (!details) return <Text>Loading...</Text>;

    return (
        <View style={{height:height }}>
            <TouchableOpacity style={{
                position:"absolute",
                top:10,
                left:10,
                zIndex:999
            }}
                onPress={()=>navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={30} color={"white"}/>
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center',gap:10}}>
                <Image source={{ uri: details.Poster }} style={{ width: width, height: 300 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold',marginTop:20 }}>{details.Title}</Text>
                <Text>Year: {details.Year}</Text>
                <Text>Genre: {details.Genre}</Text>
                <Text>Rating: {details.imdbRating}</Text>
                <Button title="Save as Favorite" onPress={saveFavorite} />
            </View>

        </View>
    );
}

import React, { useState, useEffect } from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const API_KEY = "48c3e766";
    const { height, width } = Dimensions.get("screen");
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        if (search.trim() !== '') {
            fetchMovies(true);
        }
    }, [search]);

    const fetchMovies = async (newSearch = false) => {
        if (search.trim() === '' || loading) return;

        setLoading(true);
        try {
            const res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&page=${page}`);
            if (res.data.Search) {
                setMovies(prevMovies => newSearch ? res.data.Search : [...prevMovies, ...res.data.Search]);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {/* Search Input */}
            <View style={{
                backgroundColor: "white",
                height: height / 10,
                width: width,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TextInput
                    placeholder="Search By Title"
                    style={{
                        backgroundColor: "white",
                        width: width - 30,
                        padding: 15,
                        borderRadius: 5,
                        paddingLeft: 55,
                        borderWidth: 0.5,
                        borderColor: "purple",
                    }}
                    value={search}
                    onChangeText={(text) => {
                        setSearch(text);
                        setPage(1);
                    }}
                />
                <Ionicons
                    name="search-outline"
                    style={{ position: "absolute", left: 35 }}
                    size={20}
                    color={"grey"}
                />
            </View>

            {/* Searched Movies Header */}
            <Text style={{
                fontStyle: "normal",
                fontWeight: "500",
                paddingLeft: 20,
                fontSize: 20,
            }}>
                Searched Movies
            </Text>

            {/* Movie List */}
            {
                loading ?<ActivityIndicator/>:
                    <FlatList
                        data={movies}
                        keyExtractor={(item, index) => item.imdbID || index.toString()}
                        contentContainerStyle={{ paddingBottom: 50 }}
                        onEndReached={() => {
                            if (!loading) setPage(prevPage => prevPage + 1);
                        }}
                        onEndReachedThreshold={0.8}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ width: width, alignItems: "center" }}
                                              onPress={()=>navigation.navigate('Details',{movie: item})}

                            >
                                <View style={{
                                    height: 250,
                                    width: width - 50,
                                    backgroundColor: "#EEEEEE",
                                    marginTop: 20,
                                    borderRadius: 5,
                                    alignItems: "center",
                                    elevation: 2,
                                    paddingBottom: 10
                                }}
                                    >
                                    <Image
                                        source={{ uri: item.Poster }}
                                        style={{
                                            height: 200,
                                            width: width - 50,
                                            borderRadius: 5
                                        }}
                                    />
                                    <Text style={{
                                        marginTop: 10,
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: 14,
                                        textAlign: "center",
                                        paddingLeft: 10,
                                        paddingRight: 10
                                    }}>
                                        Movie Title: {item.Title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
            }


        </SafeAreaView>
    );
};

export default Home;

import React from "react";
import {Dimensions, Image, Text, View} from "react-native";
import movieImage from "../assets/images/Movie.png";


const MovieCards=()=>{
    const {height,width} =Dimensions.get("screen");

    return(
        <View style={{
            height:210,
            width:width/2.5,
            backgroundColor:"#EEEEEE",
            marginTop:20,
            borderRadius:5,
            alignItems:"center",
            marginLeft:20
        }}>
            <Image source={movieImage} style={{
                maxHeight:150,
                maxWidth:150,
                marginTop:20
            }}/>
            <Text style={{
                marginTop:10,
                fontStyle:"normal",
                fontWeight:"500",
                fontSize:12
            }}>Spider Man 2</Text>
        </View>
    )
}

export default MovieCards
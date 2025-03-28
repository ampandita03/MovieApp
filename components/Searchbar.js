import React from 'react';
import {Dimensions, TextInput, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const Searchbar=()=>{
    const {height,width} =Dimensions.get('screen');
    return(
        <View style={{
            backgroundColor:"white",
            height:height/10,
            width:width,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <TextInput placeholder={"Search By Title"} style={{
                backgroundColor:"white",
                width:width-30,
                padding:15,
                borderRadius:5,
                paddingLeft:55,
                borderWidth:0.5,
                borderColor:"purple",
                       }}/>
            <Ionicons name="search-outline" style={{
                position:"absolute",
                left:35
            }}
                      size={20}
                      color={"grey"}
            />

        </View>
    )
}

export default Searchbar;
import React from "react";
import TabNavigation from "./navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";

const App=()=>{
    return(
        <NavigationContainer>
            <TabNavigation/>
        </NavigationContainer>
    )
}

export default App;
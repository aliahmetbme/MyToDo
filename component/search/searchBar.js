import React from "react";
import {TextInput, TouchableOpacity, SafeAreaView, Text } from "react-native";
import SearchStyle from "./searchBarStyle"

const App = (props) => {

    return(
        <SafeAreaView style={SearchStyle.container}>
            <TextInput
                style={SearchStyle.searchStyle} 
                placeholder="Write A Task ... "
                onChangeText={(task) => props.text(task)}
                value={props.value}></TextInput>
            <TouchableOpacity
                style={SearchStyle.button}
                onPress={() => props.clicked()}>
                <Text style={SearchStyle.buttonText}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default App;
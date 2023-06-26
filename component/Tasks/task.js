import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, SafeAreaView, useAnimatedValue, Text, Alert } from "react-native";
import taskStyle from "./taskStyle";

function App(props){
    const [value, setValue ] = useState(false)
    const [useability, setUsebility]= useState(false)
    const toggleCompression = () =>{
        setValue(!props.value)
        props.setComplate()
        setUsebility(!useability)
    }
    return(
        <TouchableOpacity 
            onPress={toggleCompression} 
            style={ !value ? taskStyle.container : taskStyle.completedContainer } 
            disabled={useability}
        ><Text 
            style={ value ?  taskStyle.comlatedTextStyle : taskStyle.textStyle }> {props.text} 
        </Text>
        </TouchableOpacity>
    )
}

export default App
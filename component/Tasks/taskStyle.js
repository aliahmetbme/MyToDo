import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#DADADA', 
        marginTop:15,
        marginLeft:25, 
        marginRight:25, 
        paddingLeft:8,
        borderRadius:10,
        minHeight:50
        
    },
    textStyle:{
        color:'black',
        fontSize:25, 
        textAlign:'left',
        fontWeight:"700",

    },
    comlatedTextStyle:{
        color:'black',
        fontSize:25, 
        textAlign:'left',
        fontWeight:"700",
        textDecorationLine:'line-through'
        
    },
    completedContainer:{
        backgroundColor: 'gray', 
        marginTop:15,
        marginLeft:25, 
        marginRight:25, 
        paddingLeft:8,
        borderRadius:10,
        minHeight:50

    },
})
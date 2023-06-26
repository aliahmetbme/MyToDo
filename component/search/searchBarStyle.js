import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width:Dimensions.get("screen").width - 20,
        flexDirection:'row',
        backgroundColor:"#737D7C",
        alignSelf:'center',
        borderRadius:10,
        marginBottom:10,
        marginTop:5
    },
    searchStyle:{
        flex:5,
        backgroundColor:'white',
        borderRadius:10,
        margin:10,
        paddingLeft:10,
        color:'black',
        fontSize:18
    },
    button:{
        flex:1,
        backgroundColor:'white',
        margin:10,
        marginLeft:2,
        borderRadius:10,  
    },
    buttonText:{
        fontSize:35,
        alignSelf:'center',
        color:'black'
    }
})
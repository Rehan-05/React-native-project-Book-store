import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

    container:{
        width:"100%",
        height:"100%",
        backgroundColor:'#FF6EA1',
        top:30
    },
    text:{
        textAlign:"center",
        fontFamily:'sans-serif',
        color:'white',
        fontWeight:"100"

    },
    labelImage:{
        fontSize:20,
        color:'#fff',
        fontStyle:"italic",

    },
    imgStyle:{
        width:50,
        height:50,
        backgroundColor:"transparent",
        zIndex:1,
        
    },
    imgContainer:{        
        backgroundColor:'#FF6EA1',
        position:'absolute',
        left:150,
        top:350,
        alignItems:'center',
    },
    
});
export default styles;
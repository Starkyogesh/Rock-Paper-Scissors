// First page in our Project

// first import dependencies 
import React from "react";
import { View,TouchableOpacity,Text,StyleSheet,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const one = ({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Image resizeMode=":'certain"
                    source={require('./Image/Start.gif')}
                    style={styles.img}>
                </Image>

                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('second')}>
                        <Text style={styles.btntxt}>START</Text>
                </TouchableOpacity>

                <Text style={styles.name}>Yogesh Jagadeesh</Text>
            </View>
        </SafeAreaView>
    );
};

// this styles is used to help to change our project design
const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },

    body:{
        backgroundColor:'orange',
        height:'100%',
        width:'100%',
        alignItems:'center'      
    },

    img:{
        position:'absolute',
        height:'100%',
        width:'100%',   
    },

    btn:{
        top:330,
        height:50,
        justifyContent:'center',
        borderRadius:50,
        width:200,
        backgroundColor:'lightblue',
        borderColor:'black'
    },

    btntxt:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },

    name:{
        top:630,
        color:'black'
    },
});

export default one;
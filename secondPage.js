// Second Page in our project

// first import dependencies
import React, { useState } from "react";
import {View , TouchableOpacity , Text , Image , StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


// start second page input
const two = () => {

    // this const is used to create get and set data in your project
    const [PlayerScore , setPlayerScore] = useState(0);
    const [ComputerScore , setComputerScore] = useState(0);
    const [PlayerValue , setPlayerValue] = useState(null);
    const [ComputerValue , setComputerValue] = useState(null);  

    // this const is used to reset our data for eg:0
    const reset = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerValue(null);
        setComputerValue(null);
    };


    // this const is used to game logic or condition 
    const logic = (PlayerValue,ComputerValue) =>{
        if (PlayerValue===ComputerValue) {
            return 0;
        }else if((PlayerValue === "Rock" && ComputerValue === "Scissors") ||
                (PlayerValue === "Paper" && ComputerValue === "Rock") ||
                (PlayerValue === "Scissors" && ComputerValue === "Paper")){
            return 1;
        }else{
            return -1;
        }
    };

    // this const is used to game decision for eg: player won (or) computer won
    const decision = (PlayerChoice) => {
        const Choice = ["Rock","Paper","Scissors"];
        const ComputerChoice = Choice[Math.floor(Math.random()*Choice.length)];
        const Value = logic(PlayerChoice,ComputerChoice);

        if(Value === 1){
            setPlayerValue(PlayerChoice);
            setComputerValue(ComputerChoice);
            setPlayerScore(PlayerScore + 1);
        }else if (Value === -1){
            setPlayerValue(PlayerChoice);
            setComputerValue(ComputerChoice);
            setComputerScore(ComputerScore + 1);
        }else {
            setPlayerValue(PlayerChoice);
            setComputerValue(ComputerChoice);
        }
    };


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>

                <Image
                    resizeMode='certain'
                    source={require('./Image/gameimg.jpg')}
                    style={styles.Imgs}
                />

                <Text style={styles.heading}>Rock Paper Scissors</Text>

                <View style={styles.scoreBoard}>
                    <Text style={styles.myScore}>
                        Player Score : <Text style={{color:'blue'}}> {PlayerScore} </Text>
                    </Text>
                    <Text style={styles.comScore}>
                        computer Score : <Text style={{color:'blue'}}> {ComputerScore} </Text>
                    </Text>

                    
                    <Text style={styles.ValueTxt}>
                        Player Choice : Computer Choice
                    </Text>
                    <Text style={styles.Value}>
                        {PlayerValue}  :  {ComputerValue}                        
                    </Text>
                    
                </View>

                <View allBtnView>
                    <View style={styles.rockView}>
                        <TouchableOpacity style={styles.rockBtn} onPress={()=>decision('Rock')}>
                            <Image resizeMode="certain"
                                source={require('./Image/stone.jpg')}    
                                style={styles.rockImg}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.paperView}>
                        <TouchableOpacity style={styles.paperBtn} onPress={()=>decision('Paper')}>
                            <Image resizeMode="certain"
                                source={require('./Image/paper.jpg')}
                                style={styles.paperImg}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scissorView}>
                        <TouchableOpacity style={styles.scissorBtn} onPress={()=>decision('Scissors')}>
                            <Image resizeMode="center"
                                source={require('./Image/scissor.jpg')}
                                style={styles.scissorImg}
                            />  
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.resetView}>    
                    <TouchableOpacity onPress={reset} style={styles.resetbtn}>
                        <Text style={styles.resetbtntext}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


// this const is used help to change our project design
const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
    },

    body:{
        height:'100%',
        width:'100%',
    },

    Imgs:{
        height:'100%',
        width:'100%',
        position:'absolute',
    },

    heading:{
        fontSize:30,
        color:'purple',
        fontWeight:'bold',
        textAlign:'center',
        top:'12%',
        textDecorationLine:'underline'
    },

    scoreBoard:{
        top:100,
        height:250,
        width:'100%',
    },

    myScore:{
        fontWeight:'bold',
        fontSize:30,
        top:30,
        textAlign:'center',
        color:'black'
    },

    comScore:{
        fontWeight:'bold',
        fontSize:30,
        top:30,
        textAlign:'center',
        color:'black'
    },

    ValueTxt:{
        fontWeight:'bold',
        fontSize:22,
        top:70,
        color:'red',
        textAlign:'center',
    },

    Value:{
        fontWeight:'bold',
        fontSize:30,
        top:80,
        color:'blue',
        textAlign:'center'
    },

    allBtnView:{
        position:'absolute',
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:'100%',
    },

    rockView:{
        height:100,
        width:100,
        left:'2%',
        flex:1,
        top:150,
    },

    rockImg:{
        height:100,
        width:100,
        borderRadius:50
    },

    paperView:{ 
        height:100,
        width:100,
        flex:1,
        left:'36%',
        top:150
    },

    paperImg:{
        height:100,
        width:100,
        borderRadius:50,
    },

    scissorView:{
        height:100,
        width:100,
        left:'70%',
        top:150,
    },

    scissorImg:{
        height:100,
        width:100,
        borderRadius:50,
    },

    resetbtn:{
        top:220,
        height:70,
        justifyContent:'center',
        borderRadius:70,
    },

    resetbtntext:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
});

export default two;
import React from 'react'
import {TouchableOpacity,TouchableOpacityProps, Text, StyleSheet} from 'react-native'


interface skillcardprops extends TouchableOpacityProps{
    skill: string
}

export default function TrickCard({skill, ...rest} : skillcardprops){
return (

<TouchableOpacity style={styles.buttonTrick} {...rest}>
<Text style={styles.textTrick}>{ skill }</Text>
</TouchableOpacity>

)}


const styles = StyleSheet.create({

    buttonTrick:{
        backgroundColor:'#1F1E25',
       paddingHorizontal:90,
       paddingVertical:10,
        borderRadius:10,
        marginTop:25,
        
    },
    
    textTrick:{
        color:'#fff',
        fontWeight:'bold', 
        fontSize:19,
        textAlign:'center'
        
    }
        





})
    
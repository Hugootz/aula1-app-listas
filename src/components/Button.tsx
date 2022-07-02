import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';

interface buttonProps extends TouchableOpacityProps{
    title: string
}


export default function Button({title,...rest} : buttonProps  ){
return ( <TouchableOpacity style={styles.button}
{...rest}
>
   
    <Text style={styles.buttonText}>{ title }</Text>

</TouchableOpacity>


)

}


const styles = StyleSheet.create({
    
button:{
    backgroundColor:'#8a2be2',
    paddingHorizontal:5,
    paddingVertical:15,
    marginTop: 25,
    borderRadius:10},

    buttonText:{
        color:'#fff',
        fontWeight:'bold',
    textAlign: 'center'
}
       
    
    })
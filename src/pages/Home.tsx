import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import  Button  from '../components/Button'
import SkillCard from '../components/SkillCard';

interface skillData {
  id: string;
  name: string;
}


export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setMySkill] = useState<skillData[]>([]);
  const [gretting, setgretting] = useState('')
  
  function handleAddNewTrick (){
    const data  = {
      id: String (new Date().getTime()),
      name: newSkill
    }  
    
    setMySkill(oldState =>[...oldState, data]);
  
 
  
  }
  
  function handleRemoveSkill(id: string){
    setMySkill (oldState => oldState.filter(skill => skill.id !== id))
  }
  
  
  
  useEffect(() => {
      const currentHour = new Date().getHours();
      if(currentHour < 12){setgretting('Good morning')}
      
      else if(currentHour >= 12 && currentHour < 18){setgretting ('Good afternoon')}
      
      else{ setgretting('Good night') }
  
    },[])  
 
 
 
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Welcome, Hugo</Text>
      
      <Text style={styles.greetings}>{gretting}</Text>
      
      <StatusBar style="auto" />
    
    <TextInput style={styles.input}
    placeholder='Digite aqui'
    placeholderTextColor='#fff'
    onChangeText={setNewSkill} />
    
   <Button onPress={handleAddNewTrick}
   title="clique aqui" />
   
    <Text style={[styles.title,{marginTop:30}]}>My Title</Text>

   
    
    <FlatList
data={mySkill}
keyExtractor={item => item.id}
renderItem={({item}) => (
    <SkillCard  skill={item.name}
    onPress={() => handleRemoveSkill(item.id)}/>
)}
/>




</View>
  
  
  
  
  
  );
}


//View: faz o agrupamento de códigos!
//Text: cria texto!
//touchableOpacity: cria botões com opacidade na hora q forem apertados!
//placeholder: coloca texto fixo em textInput!
//TextInput: cria uma caixa de texto!



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingVertical:70,
    paddingHorizontal:40,
    
    
    
},
  
  name: {color:'#fff',
  fontSize:25,
  fontWeight: 'bold'},

  input:{ backgroundColor:'#121015',
  paddingHorizontal:105,
  paddingVertical:10,
  color:'#fff',
  borderRadius:10,
  marginTop:30},
  
  title:{
   color:'#fff',
   fontWeight:'bold',
   textAlign:'center'},

   greetings:{
       color: '#fff'
   }
  
 



  




});

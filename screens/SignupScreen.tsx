import {SafeAreaView, Text, View ,StyleSheet, Pressable,TextInput,Image} from 'react-native';
import React, { useState,useContext } from 'react';
import { useChatContext } from 'stream-chat-expo';
import AuthContext from '../context/Authentication';

const SignupScreen = () => {
const [userName,setUserName] = useState("");
const [fullName,setFullName] = useState("");



const {setUserId} = useContext(AuthContext);

const {client} = useChatContext();



const connectUser = async (userName: string,fullName: string) =>{
  await client.connectUser(
    {
      id:userName,
      name:fullName,
      
    },
    client.devToken(userName)
  );

  const channel = client.channel("livestream","live",{
    name: "live",
  });
  await channel.watch();

  setUserId(userName);
};


const signUp = () =>{
connectUser(userName,fullName);


};
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inputContainer}>
      <TextInput
       value={userName}
        onChangeText={setUserName}
         placeholder="Username" 
         style={styles.input}/>
        </View>

        <View style={styles.inputContainer}>
        <TextInput
         value={fullName}
          onChangeText={setFullName}
           placeholder="Full name"
            style={styles.input}/>
        </View>



        <Pressable onPress={signUp} style={styles.button}>
        <Text>Sign up</Text>
         </Pressable>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root:{
flex:1,
justifyContent:'center',
margin:10,
},
  inputContainer:{
    backgroundColor:'white',
    padding:10,
    marginVertical:10,
  },
    input:{},
    button:{
      backgroundColor:"#256CFF",
      padding:15,
      alignItems:'center',
    }
  
})

export default SignupScreen;


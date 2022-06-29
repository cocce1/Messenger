import { StatusBar } from 'expo-status-bar';
import React, { useEffect ,useState,useContext} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StreamChat} from "stream-chat";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {OverlayProvider,Chat, ChannelList,Channel} from "stream-chat-expo";
import AuthContext from './context/Authentication';





const API_KEY ="sa2dpyeevqyb"; // the api key  we got from stream when u created an account 
const client = StreamChat.getInstance(API_KEY);// initialazes a client


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



const [userId,setUserId] = useState("");
const [selectedChannel,setupSelectedChannel] = useState<any>(null);

  useEffect(() =>{
     return () => client.disconnectUser()
     },[]);

     const onChannelPressed =(channel:string) =>{
      setupSelectedChannel(channel);
     };
 


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContext.Provider value={{ userId,setUserId}}>
        <OverlayProvider>
        <Chat client={client}>
        
          <Navigation colorScheme="light" />
          </Chat>
        </OverlayProvider>
        <StatusBar />
        </AuthContext.Provider>
      </SafeAreaProvider>
    );
  }
}

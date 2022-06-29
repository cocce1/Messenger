import { View, Text } from 'react-native'
import React from 'react'
import { Channel,MessageList,MessageInput } from 'stream-chat-react-native-core';
import { useRoute } from '@react-navigation/core';

const ChannelScreen = () => {
    const route = useRoute();
    
    const channel = route.params?.channel;


    if(!channel){
        return<Text>Channel not found</Text>
    }
  return (
    <Channel channel={channel}>
    <MessageList/>
    <MessageInput/>
    </Channel>
  );
};

export default ChannelScreen;
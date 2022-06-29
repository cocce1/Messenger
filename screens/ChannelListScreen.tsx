import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
   navigation,
   }: RootTabScreenProps<'TabOne'>) {

  

  const onChannelPressed = (channel) => {
    navigation.navigate("Channel",{channel});
  };
  return 
    <ChannelList onSelect={onChannelPressed}/>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

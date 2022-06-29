import { StyleSheet,FlatList } from 'react-native';
import { View } from '../components/Themed';
import { useEffect ,useState} from 'react';
import { useChatContext } from 'stream-chat-expo';
import UserListItem from '../components/UserListItem';

export default function UsersScreen() {
const [users,setUsers] = useState<any[]>([]);
const [isLoading,setIsLoading] = useState(false);

const { client } = useChatContext();



const fetchUsers = async () => {
  setIsLoading(true);
  const response =  await client.queryUsers({});
  setUsers (response.users);
  setIsLoading(false);
};
useEffect(() =>{
  


fetchUsers();
}, []);


  return (
    <View style={styles.container}>
   <FlatList
    data ={users}
     renderItem ={({item}) => <UserListItem user ={item}/>}
     refreshing={isLoading}
     onRefresh={fetchUsers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    justifyContent: 'center',

  },
 
});

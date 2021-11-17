import React from 'react'
import { View, FlatList,StyleSheet } from 'react-native'
import Message from './../components/Message/Message';
import ChatMessages from '../assets/dummy-data/Chats'
import MessageInput from '../components/MessageInput';

const ChatRoomScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={ChatMessages.messages}
            renderItem={({item}) => <Message message={item} />}
            />
        <MessageInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding: 10,
    }
})

export default ChatRoomScreen

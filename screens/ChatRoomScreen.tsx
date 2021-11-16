import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Message from './../components/Message/Message';

const ChatRoomScreen = () => {
    return (
        <View style={styles.container}>
            <Message/>
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

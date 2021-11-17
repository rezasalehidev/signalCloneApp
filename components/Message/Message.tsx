import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Message = ({message}) => {

    const isMe = message.user.id === 'u1';

    const blue = '#3777f0';


    return (
        <View style={[styles.container,isMe ? styles.RightMessage : styles.LeftMessage]}>
            <Text style={[styles.text,,{color:isMe ? 'black' : 'white' }]}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        maxWidth:'75%',
        backgroundColor:'#3777f0',
        padding:10,
        borderRadius:10,
        marginBottom:20,
    },
    text:{
        color:'white',
        textAlign:'left'
    },
    LeftMessage :{
        backgroundColor:'#3777f0',
        marginLeft:0,
        marginRight:'auto'
    },
    RightMessage:{
        backgroundColor:'lightgrey',
        marginLeft:'auto',
        marginRight:0
    }
})

export default Message

import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Message = () => {

    const isMe = false;

    const blue = '#3777f0';


    return (
        <View style={[styles.container,{backgroundColor:isMe ? 'lightgrey' : blue,marginLeft : isMe ? 'auto' : 0 }]}>
            <Text style={[styles.text,,{color:isMe ? 'black' : 'white' }]}>Message</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'75%',
        backgroundColor:'#3777f0',
        padding:10,
        borderRadius:10,
    },
    text:{
        color:'white',
        textAlign:'left'
    }
})

export default Message

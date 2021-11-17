import React from 'react'
import { Entypo,SimpleLineIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TextInput,Platform,Pressable,KeyboardAvoidingView } from 'react-native'

const MessageInput = () => {
    const [message, setMessage] = React.useState("")

    const sendMessage =()=>{
        console.log("send message" , message);
        setMessage("")
    }

    const onPlusPress = () =>{
        console.log("please type someting");
        
    }

    const OnPress = ()=>{
        if (message) {
            sendMessage()
        } else {
            onPlusPress()
        }
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS ==='ios' ? "padding" : 'height'}  keyboardVerticalOffset={100} style={styles.container}>
            <View style={styles.leftInput}>
                <View style={{flex:Platform.OS ==="web" ? 9 : 4,flexDirection:'row',alignItems:'center'}}>
                    <Entypo name="emoji-happy" size={22} color="grey" style={{marginLeft:10}}  />
                    <TextInput numberOfLines={3} placeholder="Type Message" style={styles.textInputStyle} onChangeText={setMessage} value={message}  />
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginRight:10}}>
                    <Entypo name="camera" size={22} color="grey" style={{marginRight:10}} />
                    <SimpleLineIcons name="microphone" size={22} color="grey" />
                </View>
            </View>
            <Pressable onPress={OnPress} style={styles.rightInput}>
                {
                    message !== "" ? <Entypo name="paper-plane" size={24} color="white" /> : <Text style={{color:'white',fontSize:25}}>+</Text>
                }
                
            </Pressable>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 80,
        flexDirection: 'row',
        borderRadius: 15,
    },
    leftInput: {
        backgroundColor: '#dedede', 
        flex: 6,
        borderRadius: 25, 
        marginRight: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
         },
    rightInput: {
        backgroundColor: '#3777f0', 
        flex: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center'
    },
    textInputStyle:{
        marginLeft:10,
        flex:1,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        height: '100%'
    }
})

export default MessageInput

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const ChatRoomItem = ({ chatRoom }) => {
  const chatUser = chatRoom.users[1]
  return (
    <View style={styles.innerContainer}>
      <View style={{ flex: 1}}>
        <Image source={{ uri: chatUser.imageUri }} style={styles.image} />
        {
          chatRoom.newMessage &&
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
          </View>
        }

      </View>
      <View style={styles.outerContainer}>
        <View style={styles.RowText}>
          <Text style={styles.name}>{chatUser.name}</Text>
          <Text style={styles.text}>{new Date(chatRoom.lastMessage.createdAt).toLocaleTimeString('fa-IR')}</Text>
        </View>
        <Text numberOfLines={1}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
  )
}



export default ChatRoomItem

import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import ChatRoomItem from '../components/ChatRommItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRooms from '../assets/dummy-data/ChatRooms';

const chatRoom1 = ChatRooms[0]
const chatRoom2 = ChatRooms[1]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
        <ChatRoomItem chatRoom={chatRoom1} />
        <ChatRoomItem chatRoom={chatRoom2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

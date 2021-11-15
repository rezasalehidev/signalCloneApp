import * as React from 'react';
import { Image, StyleSheet,FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRommItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRooms from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={ChatRooms}
        renderItem={({item})=><ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=> item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

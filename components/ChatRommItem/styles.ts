import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
      },
      text: {
        color: 'gray',
        fontSize: 9,
      },
      RowText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      name: {
        fontWeight: 'bold'
      },
      innerContainer: {
        flexDirection: 'row', 
        marginTop: 10 
      },
      outerContainer:{
        flex: 3,
        justifyContent:'center'
      },
      badgeContainer:{
        width:20,
        height: 20,
        backgroundColor:'#3777f0',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        right: 30,
        top: 3,
        borderWidth:1,
        borderColor:'#fff'
      },
      badgeText:{
        color:'white',
        fontSize:11,
      }
})

export default styles
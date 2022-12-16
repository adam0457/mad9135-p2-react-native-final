import React from 'react'
import {View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native'

export default function ChartItem({book, removeFromCart}){

  const removeAlert = () =>
    Alert.alert(
      "Remove Item",
      "You are about to remove this book from your cart",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => handleDeleteBtn() }
      ]
    );

  function handleDeleteBtn(){
    removeFromCart(book)
  }
  return(
          <View style = {styles.bookItemContainer}>
                <Image style = {styles.img} source={book.image} />
                <View style={styles.bookItemTextContent}>
                    <Text  >{book.bookName}</Text>
                    <Text>by <Text style={styles.author}>{book.author}</Text></Text>
                    <Text  >${book.price}</Text>
                </View>
                <Pressable style={styles.deleteBtn} onPress={removeAlert}>
                    <Text style={styles.textDeleteBtn}>Remove</Text>
                </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  bookItemContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    
    alignItems: "center",
    margin: 10,
    padding:10,
    backgroundColor:"white",
    borderBottomWidth:5,
    borderRadius:8

  },
  img:{
    width: 100,
    height:100,
    marginRight:10
  },
  bookItemTextContent:{
    width:200,
    flex:1,
    flexDirection:"column",
    justifyContent:"space-around",
    fontWeight:'bold'
  },
  author:{
    color:"blue"
  },

  deleteBtn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'hsl(349,100%,24%)',
    marginTop:20
  },

  textDeleteBtn:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})
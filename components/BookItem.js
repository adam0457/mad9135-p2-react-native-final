import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function BookItem({book, onPress}){


  return(

    <TouchableOpacity onPress = {onPress}>
          <View style = {styles.bookItemContainer}>
              <Image style = {styles.img} source={book.image} />
              <View style={styles.bookItemTextContent}>
                  <Text  >{book.bookName}</Text>
                  <Text>by <Text style={styles.author}>{book.author}</Text></Text>
                  <Text>${book.price}</Text>
              </View>
          </View>
    </TouchableOpacity>
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
    backgroundColor:"gainsboro",
    borderRadius:8,
    borderBottomWidth:5,
    borderBottomColor:"cornflowerblue"


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
  }
})
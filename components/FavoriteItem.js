import React from 'react'
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function FavoriteItem({removeFromFavorites, favoriteBook}){

  function handleDelete(){
    removeFromFavorites(favoriteBook)
  }

  return(
          <View style = {styles.bookItemContainer}>
                <Image style = {styles.img} source={favoriteBook.image} />
                <View style={styles.bookItemTextContent}>
                    <Text  >{favoriteBook.bookName}</Text>
                    <Text>by <Text style={styles.author}>{favoriteBook.author}</Text></Text>
                    <Text>${favoriteBook.price}</Text>
                </View>
                <Pressable onPress={handleDelete}>
                    <AntDesign name="delete" size={32} color="hsl(349,100%,24%)" />
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
  }
})
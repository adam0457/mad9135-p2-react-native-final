import React from 'react'
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function FavoriteItem({removeFromFavorites, favoriteBook}){

  function handleDelete(){
    removeFromFavorites(favoriteBook)
  }

  return(
          <View>
              <Image style = {styles.img} source={favoriteBook.image}/>
              <Text>{favoriteBook.bookName}</Text>
              <Pressable onPress={handleDelete}>
                  <AntDesign name="delete" size={32} color="red" />
              </Pressable>
          </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  

  },
  img:{
    width: 150,
    height:150
  }
})
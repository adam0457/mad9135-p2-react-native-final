import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function FavoriteItem({favoriteBook}){

  // console.log(`the favorite item: ${favoriteBook}`)
  

  return(

   
          <View>
              {/* <Image style = {styles.img} source={require(`../assets/img/${book.image}.jpg`)} /> */}
              {/* <Image style = {styles.img} source={require("../assets/img/7habits.jpg")} /> */}
              <Text>{favoriteBook.bookName}</Text>
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
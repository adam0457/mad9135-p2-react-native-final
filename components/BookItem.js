import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function BookItem({book, onPress}){


  return(

    <TouchableOpacity onPress = {onPress}>
          <View>
              {/* <Image style = {styles.img} source={require(`../assets/img/${book.image}.jpg`)} /> */}
              <Image style = {styles.img} source={require("../assets/img/7habits.jpg")} />
              <Text>{book.bookName}</Text>
          </View>
    </TouchableOpacity>
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
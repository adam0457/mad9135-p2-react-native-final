import React from 'react'
import {useState} from 'react'
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { useBook } from '../context/BookContext'
import { MaterialIcons } from '@expo/vector-icons';


export default function BookDetails({route}){
  const [books] = useBook()
  const selectedCategory = books.find(item => item.categoryId === route.params.categoryId)
  const selectedBook = selectedCategory.items.find(item => item.bookId === route.params.bookId)

  const [like, setLike] = useState(true)

  function changeIconName(){
    setLike(!like)
  }
  
  return(

    <View>
      <Image style = {styles.img} source={require(`../assets/img/${selectedBook.image}.jpg`)}/>
      <Text>{selectedBook.bookName}</Text>
      <Pressable onPress={changeIconName} >
          <MaterialIcons name={like ? "favorite-outline" : "favorite" } size={32} color="red" />
      </Pressable>  
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  

  },
  img:{
    width: 250,
    height:250
  }
})
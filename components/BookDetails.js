import React from 'react'
import {useState} from 'react'
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { useBook } from '../context/BookContext'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function BookDetails({route}){
  const [books, myFavorites, setMyFavorites] = useBook()
  const selectedCategory = books.find(item => item.categoryId === route.params.categoryId)
  const selectedBook = selectedCategory.items.find(item => item.bookId === route.params.bookId)
  // console.log(` the selected book: ${selectedBook}`)

  const [like, setLike] = useState(true)
  let tempArr = []

  if(myFavorites){ 
    tempArr = myFavorites
  }

  function handleLike(){
    if(!tempArr.some(element => element.bookId === selectedBook.bookId)){
      tempArr = [...tempArr, selectedBook]
      setMyFavorites([...myFavorites, selectedBook])
      setFavoritesInLocalStorage([...tempArr])
    }
  
    changeIconName()
  }

  const setFavoritesInLocalStorage = async (myFavorites) => {
    try {
      const favorites = JSON.stringify(myFavorites)
      // console.log(`The book I want to store: ${favorites}`)
      await AsyncStorage.setItem('storage_Key', favorites)
    } catch (e) {
      console.log(e.message)
    }
  }

  function changeIconName(){
    setLike(!like)
  }
  
  return(

    <View>
      <Image style = {styles.img} source={selectedBook.image}/>
      <Text>{selectedBook.bookName}</Text>
      <Pressable onPress={handleLike} >
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
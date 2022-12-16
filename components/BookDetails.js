import React from 'react'
import {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native'
import { useBook } from '../context/BookContext'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function BookDetails({route}){
  const [books, myFavorites, setMyFavorites] = useBook()
  const selectedCategory = books.find(item => item.categoryId === route.params.categoryId)
  const selectedBook = selectedCategory.items.find(item => item.bookId === route.params.bookId)

  const [like, setLike] = useState(false)
//Set the value of the like icon when the component is loaded

useEffect(()=>{
  //Test if the selected book is in my favorites
  if(myFavorites && myFavorites.some(element => element.bookId === selectedBook.bookId)){
      setLike(true)
  }

},[myFavorites])





  let tempArr = []
  if(myFavorites){ 
    tempArr = myFavorites
  }

  function handleLike(){
    //Adding the selected book in my favorites if it is not already there
    if(!tempArr.some(element => element.bookId === selectedBook.bookId)){
      tempArr = [...tempArr, selectedBook]
      setMyFavorites([...myFavorites, selectedBook])
      setFavoritesInLocalStorage([...tempArr])
    }else{  //Remove the selected book in my favorites if it's in there
        const index = tempArr.indexOf(selectedBook)
        tempArr.splice(index, 1)
        setMyFavorites([...tempArr])
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

  function handleBtnAdd(){
    console.log('Add to chart')
  }

  return(
    <SafeAreaView>
        <ScrollView style={styles.bookDetailsContainer}>
              <Text>{selectedBook.author}</Text>
              <Text>{selectedBook.bookName}</Text>
                    <Image style = {styles.bookDetailsImg} source={selectedBook.image}/>
                    <Pressable onPress={handleLike} >
                        <MaterialIcons name={like ? "favorite" : "favorite-outline" } size={40} color="red" />
                    </Pressable> 
              <Text style={styles.price} >${selectedBook.price}</Text>
              <Text>{selectedBook.description}</Text>
              <Pressable style={styles.button} onPress={handleBtnAdd}>
                      <Text style={styles.textBtn} >Add to Chart</Text>
              </Pressable>

              
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bookDetailsContainer:{
    
    marginLeft: 20,
    marginRight:20,
    marginBottom:20
  },
  
  bookDetailsImg:{
    width: 250,
    height:250,
    marginBottom:10,
    marginTop:10
  },
  price:{
    marginBottom:10,
    marginTop:10
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginTop:20
  },

  textBtn:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }

})
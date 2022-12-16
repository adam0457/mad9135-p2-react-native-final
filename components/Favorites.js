import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useBook } from '../context/BookContext'
import FavoriteItem from './FavoriteItem'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Favorites(){
  const [books, myFavorites, setMyFavorites] = useBook()

  function removeFromFavorites(book){
    let tempArr = []
    tempArr = myFavorites
    const index = tempArr.indexOf(book)
    tempArr.splice(index, 1)
    setMyFavorites([...tempArr])
    setFavoritesInLocalStorage([...tempArr])
  }

  const setFavoritesInLocalStorage = async (myFavorites) => {
    try {
      const favorites = JSON.stringify(myFavorites)
      await AsyncStorage.setItem('storage_Key', favorites)
    } catch (e) {
      console.log(e.message)
    }
  }

  if(myFavorites && myFavorites.length > 0){
    return(
      <SafeAreaView>
        <FlatList
          data = {myFavorites}
            renderItem = {({item}) => {
                  console.log(`the favorite :${item.bookName}`)
                return <FavoriteItem removeFromFavorites={removeFromFavorites} favoriteBook={item}  />
            }}

            keyExtractor = {(item,index) => index}
          
        />
      </SafeAreaView>
    )
    
  }

}
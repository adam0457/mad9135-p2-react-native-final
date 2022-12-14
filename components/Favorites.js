import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useBook } from '../context/BookContext'
import FavoriteItem from './FavoriteItem'

export default function Favorites(){

  const [books, myFavorites, setMyFavorites] = useBook()

  const testArr = [
                      {
                        "name": "vlad",
                        "occupation":"student"
                      },
                      {
                        "name": "ludenie",
                        "occupation":"student"
                      }

                  ]
  

  // console.log(`that will be my favorites to list: ${myFavorites}`)
  // console.log(testArr)

  let favArr = []
   favArr = myFavorites
  

  if(myFavorites && myFavorites.length > 0){

    return(

      <FlatList
      data = {myFavorites}
        renderItem = {({item}) => {
              console.log(`the favorite :${item.bookName}`)
            return <FavoriteItem favoriteBook={item}  />
        }}

        // key = {(item, index) => index}
  
        keyExtractor = {(item,index) => index}
      
      />
    )
    
  }

}
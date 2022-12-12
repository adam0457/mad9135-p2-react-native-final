import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useBook } from '../context/BookContext'
import BookItem from './BookItem'

export default function Books(props){

    const [books] = useBook()
  
  
  return(

    <FlatList
    
      data = {books}
      renderItem = {({item}) => {
      
          return <BookItem book = {item} onPress = {()=>props.navigation.navigate('BookDetails', {id:item.bookId})} />
      }}

      keyExtractor = {item => item.bookId}

    />
          
  
  )
}
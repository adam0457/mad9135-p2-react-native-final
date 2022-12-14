import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useBook } from '../context/BookContext'
import BookItem from './BookItem'

export default function Books(props){

    const [books] = useBook()

    // console.log(props)
  
   const selectedCategory = books.find(item => item.categoryId === props.categoryId)

    // selectedCategory.items is an array of books from the same category
    // console.log(selectedCategory.items)
    let booksArr = []
    booksArr = selectedCategory.items
    // console.log(booksArr)

  return(

    <FlatList
    
      data = {booksArr}
      renderItem = {({item}) => {
      
          return <BookItem book = {item} onPress = {()=>props.navigation.navigate('BookDetails', {categoryId: props.categoryId, bookId:item.bookId})} />
      }}

      keyExtractor = {item => item.bookId}

    />
          
  
  )
}
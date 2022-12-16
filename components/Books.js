import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useBook } from '../context/BookContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import BookItem from './BookItem'

export default function Books(props){

    const [books] = useBook()

    console.log(`those are the books: ${books}`)
  
   const selectedCategory = books.find(item => item.categoryId === props.categoryId)

    // selectedCategory.items is an array of books from the same category
    // console.log(selectedCategory.items)
    let booksArr = []
    booksArr = selectedCategory.items
    // console.log(booksArr)

  return(
    <SafeAreaView>
        <FlatList
        
          data = {booksArr}
          renderItem = {({item}) => {
          
              return <BookItem book = {item} onPress = {()=>props.navigation.navigate('BookDetails', {categoryId: props.categoryId, bookId:item.bookId})} />
          }}

          keyExtractor = {item => item.bookId}

        />
  </SafeAreaView>    
  
  )
}
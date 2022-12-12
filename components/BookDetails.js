import React from 'react'
import {View, Text} from 'react-native'
import { useBook } from '../context/BookContext'


export default function BookDetails({route}){
  const [books] = useBook()
  const selectedCategory = books.find(item => item.categoryId === route.params.categoryId)
  const selectedBook = selectedCategory.items.find(item => item.bookId === route.params.bookId)
  


  return(

    <Text>
      {selectedBook.bookName}
    </Text>
  )
}
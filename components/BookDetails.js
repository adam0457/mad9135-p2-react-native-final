import React from 'react'
import {View, Text} from 'react-native'
import { useBook } from '../context/BookContext'


export default function BookDetails({route}){
  
  const [books] = useBook()

  const selectedBook = books.find(item => item.bookId === route.params.id)

  return(

    <Text>
        {selectedBook.bookName}
    </Text>
  )
}
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default function BookItem({book, onPress}){



  return(

    <TouchableOpacity onPress = {onPress}>
          <View>
              <Text>{book.bookName}</Text>
          </View>
    </TouchableOpacity>
  )
}
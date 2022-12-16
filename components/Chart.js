import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useBook } from '../context/BookContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import ChartItem from './ChartItem';

export default function Chart(){

    const [,,,myChart,] = useBook()

    myChart.forEach(item => console.log(item.category))
  
  if(myChart && myChart.length > 0){
    return(
      <SafeAreaView>
          <FlatList
          
            data = {myChart}
            renderItem = {({item}) => {
            
                return <ChartItem book = {item} />
            }}
  
            keyExtractor = {item => item.bookId}
  
          />
    </SafeAreaView>    
    
    )
  }
  
}
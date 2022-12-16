import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useBook } from '../context/BookContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import ChartItem from './ChartItem';

export default function Chart(){

    const [,,,myChart,setMyChart] = useBook()

    let tempArr = []
    if(myChart){ 
      tempArr = myChart
    }

    function removeFromCart(book){
      const index = tempArr.indexOf(book)
      tempArr.splice(index, 1)
      setMyChart([...tempArr])
      setMyChartInLocalStorage([...tempArr]) 
    }

    async function setMyChartInLocalStorage(){
      try {
        const chart = JSON.stringify(myChart)
        await AsyncStorage.setItem('chart_storage_Key', chart)
      } catch (e) {
        console.log(e.message)
      }
}
  

  if(myChart && myChart.length > 0){
    return(
      <SafeAreaView>
          <FlatList
          
            data = {myChart}
            renderItem = {({item}) => {
            
                return <ChartItem removeFromCart={removeFromCart} book = {item} />
            }}
  
            keyExtractor = {item => item.bookId}
  
          />
    </SafeAreaView>    
    
    )
  }
  
}
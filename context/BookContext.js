import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookContext = createContext()

function BookProvider(props){

    const [books, setBooks] = useState()
    const [myFavorites, setMyFavorites] = useState([])
    const [myChart, setMyChart] = useState([])

    useEffect(()=>{
      getBooks()
      // removeFromLocalStorage()
      getMyFavoritesFromAsyncStorage()
      getMyChartFromAsyncStorage()
    },[])

    async function getBooks(){
      const {products} = await import('../data/data')
      setBooks(products)
    }

    async function removeFromLocalStorage(){
        try {
            await AsyncStorage.removeItem("storage_Key");
            await AsyncStorage.removeItem("chart_storage_Key");
            return true;
        }
        catch(exception) {
            return false;
        }
    }




const getMyFavoritesFromAsyncStorage = async () => {
  try {
    const storage = await AsyncStorage.getItem('storage_Key')
    if(storage != null){
      console.log(`Those are my favorites from the storage: ${JSON.parse(storage)}`)
      setMyFavorites(JSON.parse(storage))
    }else{console.log("storage is empty")}
  } catch(e) {
    console.log(e.message)
  }
}

const getMyChartFromAsyncStorage = async () => {
  try {
    const storage = await AsyncStorage.getItem('chart_storage_Key')
    if(storage != null){
      setMyChart(JSON.parse(storage))
    }else{console.log("chart storage is empty")}
  } catch(e) {
    console.log(e.message)
  }
}



    return <BookContext.Provider value={[books, myFavorites, setMyFavorites, myChart, setMyChart]} {...props} /> 
}



function useBook(){
    const context = useContext(BookContext)
    if(!context) throw new console.error('Can not find a context')
    return context
}

export {BookProvider, useBook}
import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

const BookContext = createContext()

function BookProvider(props){

    const [books, setBooks] = useState()
    useEffect(()=>{
      console.log("hello")
      getBooks()
    },[])

    async function getBooks(){
      const {products} = await import('../data/data')
      setBooks(products)
      console.log(products)
    }


    return <BookContext.Provider value={[books]} {...props} /> 
}



function useBook(){
    const context = useContext(BookContext)
    if(!context) throw new console.error('Can not find a context')
    return context
}

export {BookProvider, useBook}
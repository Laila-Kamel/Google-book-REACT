import React from 'react'
import { useEffect } from 'react';
import { useState,useContext } from 'react';
import BookCard from '../BookCard';
import style from './BooksList.module.scss';
import { SearchContext } from "../../Context/SearchProvider.jsx";

const BooksList = () => {
    const [booksList, setBooksList]=useState([]);
    const context= useContext(SearchContext);
    console.log(context);
    const {searchBook}=context;
console.log(searchBook);
    // const [test,setTest]=useState(searchWord);

    useEffect(()=>{
      // setTest(searchWord);
        const wrapper=async()=>{
            const response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`);
            const data=await response.json();
            console.log(data);
            setBooksList(data.items)
        }
        wrapper();

    },[searchBook])
  return (
    <main className={style.books}>
    {
       
       booksList && booksList.map((book,index)=>
        <BookCard book={book} key={index} />
    )
    
    }
    </main>
  )
}

export default BooksList
import React from 'react'
import { useState } from 'react';
import style from './BookCard.module.scss';
import Modal from '../Modal';

const BookCard = ({book}) => {
  let {title,description,imageLinks}=book.volumeInfo;
  const[isOpen,setIsOpen]=useState(false);
  let bookImg=imageLinks.smallThumbnail?imageLinks.smallThumbnail:"https://image.shutterstock.com/image-vector/vector-graphic-no-thumbnail-symbol-260nw-1391095985.jpg"
  return (
    <div className={style.book} onClick={()=>setIsOpen(true)} >
      <img src={bookImg} className={style._img} alt={title}></img>
      <p className={style._title}>{title}</p>
      <p>{description}</p>
      {
        isOpen&&<Modal setIsOpen={setIsOpen} book={book}/>
      }
    </div>
  )
}

export default BookCard
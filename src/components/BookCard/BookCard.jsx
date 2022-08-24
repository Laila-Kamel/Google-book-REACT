import React from 'react'
import { useState } from 'react';
import style from './BookCard.module.scss';
import Modal from '../Modal';
import { useEffect } from 'react';

const BookCard = ({book}) => {
  let {title,description,imageLinks}=book.volumeInfo;
  const[isModalOpen,setIsModalOpen]=useState(false);
  let bookImg=imageLinks.smallThumbnail?imageLinks.smallThumbnail:"https://image.shutterstock.com/image-vector/vector-graphic-no-thumbnail-symbol-260nw-1391095985.jpg"



  return (
    <div className={style.book} onClick={()=>setIsModalOpen(true)} >
      <img src={bookImg} className={style._img} alt={title}></img>
      <p className={style._title}>{title}</p>
      <p>{description}</p>
      {
        isModalOpen&&<Modal setIsModalOpen={setIsModalOpen} book={book}/>
      }
    </div>
  )
}

export default BookCard
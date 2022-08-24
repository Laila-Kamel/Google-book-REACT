import React from 'react';
import style from "./Modal.module.scss";

const Modal = ({setIsOpen,book}) => {
    console.log(book);
  return (
    <div className={style.background}>
        <div className={style.modalBox}>
            <div className={style.modalText}>
                <h2>{book.volumeInfo.title}</h2>
                <p><span>Publisher: </span>{book.volumeInfo.publisher}</p>
                <p><span>Published date:</span> {book.volumeInfo.publishedDate}</p>
                <p><span>Average rating:</span>{book.volumeInfo.averageRating}/5</p>
                <p><span>Country:</span> {book.saleInfo.country}</p>
                <button onClick={()=>setIsOpen(false)}>Close</button>
            </div>
    </div>
    </div>
  )
}

export default Modal
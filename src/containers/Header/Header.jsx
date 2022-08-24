import React from 'react';
import logo from '../../logo.ico';
import style from './Header.module.scss';
const header = () => {
  return (
   <div className={style.Container}>
     <img src={logo} alt="Logo" className={style.
        _image}/>
     <p className={style._title}>Google Books</p>
   </div>
  )
}

export default header
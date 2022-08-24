import React from 'react';
import style from "./PageWrapper.module.scss";

const PageWrapper = ({children}) => {
  return (
    <div className={style.Container}>{children}</div>
  )
}

export default PageWrapper
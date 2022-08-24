import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "../../Context/SearchProvider.jsx";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const context= useContext(SearchContext);
  const{setSearchBook}=context;
  const onChangeInput = (e) => {
    setInput(e.target.value);
   
  };
  const submitForm=(e)=>{
      e.preventDefault();
      if(input)
      setSearchBook(input);
      else{
        alert("Please enter a keyword");
      }
  }
  useEffect(()=>{
    console.log(input);
  },[input])
  return (
    <>
      <form className={style.Container} onSubmit={submitForm}>
        <input className={style._input} type='text' onChange={onChangeInput} value={input} />
        <input className={style._btn} type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchBar;

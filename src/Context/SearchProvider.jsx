import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const SearchContext=createContext();

const SearchProvider = ({children}) => {
    const [searchBook,setSearchBook]=useState("Potter");
    const context={searchBook,setSearchBook};
  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  )
}

export default SearchProvider
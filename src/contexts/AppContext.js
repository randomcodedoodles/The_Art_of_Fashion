import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';


export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [dropDownManuShown, setDropDownManuShown] = useState(false);


    useEffect(()=>{
        console.log(document.body.scrollWidth, document.body.clientWidth, window.innerWidth, document.documentElement.clientWidth, window.screen.width)
    
        const handleHorizontalScrollBarWhenLoaded = () => window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, 0);
        window.addEventListener("load", handleHorizontalScrollBarWhenLoaded);
    
        return () => window.removeEventListener("load", handleHorizontalScrollBarWhenLoaded);
    },[]) 
        


    const showDropDownManu = () => setDropDownManuShown(!dropDownManuShown);
    const alwaysHideDropDownManu = () => setDropDownManuShown(false);
    


  return(
    <AppContext.Provider value={{
      dropDownManuShown, setDropDownManuShown,
      showDropDownManu, alwaysHideDropDownManu,
    }}>
      {children}
    </AppContext.Provider>
  );
};



export const useApp=()=>{
    const {
        dropDownManuShown, setDropDownManuShown,
        showDropDownManu, alwaysHideDropDownManu,
    } = useContext(AppContext);

    return {
        dropDownManuShown, setDropDownManuShown,
        showDropDownManu, alwaysHideDropDownManu,
    } //return a single obj
}
import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
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
        

    const headerRef = useRef(null);

    useEffect(() => {
      //document.addEventListener("mousedown", handleClickOutside, false); //incl vertical scroll
      document.addEventListener("click", handleClickOutside, false); //excl vertical scroll
      return () => {
        //document.removeEventListener("mousedown", handleClickOutside, false);
        document.removeEventListener("click", handleClickOutside, false);
      };
    }, []);
  
    const handleClickOutside = event => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        alwaysHideDropDownManu();
      }
    };

    const showDropDownManu = () => setDropDownManuShown(!dropDownManuShown);
    const alwaysHideDropDownManu = () => setDropDownManuShown(false);
    


  return(
    <AppContext.Provider value={{
      dropDownManuShown, setDropDownManuShown,
      showDropDownManu, alwaysHideDropDownManu,
      headerRef,
    }}>
      {children}
    </AppContext.Provider>
  );
};



export const useApp=()=>{
    const {
        dropDownManuShown, setDropDownManuShown,
        showDropDownManu, alwaysHideDropDownManu,
        headerRef,
    } = useContext(AppContext);

    return {
        dropDownManuShown, setDropDownManuShown,
        showDropDownManu, alwaysHideDropDownManu,
        headerRef,
    } //return a single obj
}
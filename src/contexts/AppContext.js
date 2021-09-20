import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';


export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [dropDownManuShown, setDropDownManuShown] = useState(false);

    //const [bannerItems, setBannerItems] = useState([]);


    useEffect(()=>{
        console.log(document.body.scrollWidth, document.body.clientWidth, window.innerWidth, document.documentElement.clientWidth, window.screen.width)
    
        const handleHorizontalScrollBarWhenLoaded = () => window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, 0);
        window.addEventListener("load", handleHorizontalScrollBarWhenLoaded);
    
        return () => window.removeEventListener("load", handleHorizontalScrollBarWhenLoaded);
    },[]) 

    /*
    useEffect(() => {
        fetchBannerItems();
    }, [])
    

    const fetchBannerItems = async () => {
        try{
            const items = await axios.get("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details");
            if(items.status === 200 || items.statusText === 'OK'){
                setBannerItems(items.data.Details);
            }
        }catch(err){
            //console.log(err.response, err.response.status, err.response.statusText);
        }
    }
        */


    const showDropDownManu = () => setDropDownManuShown(!dropDownManuShown);
    const alwaysHideDropDownManu = () => setDropDownManuShown(false);
    


  return(
    <AppContext.Provider value={{
      dropDownManuShown, setDropDownManuShown,
      showDropDownManu, alwaysHideDropDownManu,
      //bannerItems, setBannerItems,
    }}>
      {children}
    </AppContext.Provider>
  );
};



export const useApp=()=>{
    const {
        dropDownManuShown, setDropDownManuShown,
        showDropDownManu, alwaysHideDropDownManu,
        //bannerItems, setBannerItems,
    } = useContext(AppContext);

    return {
        dropDownManuShown, setDropDownManuShown,
        showDropDownManu, alwaysHideDropDownManu,
        //bannerItems, setBannerItems,
    } //return a single obj
}
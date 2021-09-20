import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';


export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [dropDownManuShown, setDropDownManuShown] = useState(false);

    const [userData, setUserData] = useState({
        FullName: "",
        EmailAddress:"",
        PhoneNumbers: [""],
        Message: "",
        bIncludeAddressDetails: false,
        AddressDetails: {
            AddressLine1: "",
            AddressLine2: "",
            CityTown: "",
            StateCounty: "",
            Postcode: "",
            Country: ""
        }
    });

    const [errMsg, setErrMsg] = useState([]);
    const [submitted, setSubmitted] = useState(false);

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

    const handleInputChange = (source, target) => { 
        
        if (!userData.bIncludeAddressDetails) {
            setUserData({
                ...userData,
                [source] : target
            })
          } else {
            switch (source) {
                case "FullName":
                case "EmailAddress":
                case "Message":
                    setUserData({
                        ...userData,
                        [source] : target
                      });
                      break;
                case "AddressLine1":
                case "AddressLine2":
                case "CityTown":
                case "StateCounty":
                case "Postcode":
                case "Country":
                    setUserData({
                        ...userData,
                        AddressDetails: {
                          ...userData.AddressDetails,
                          [source] : target
                        }
                      });
                      break;
                default:
          }
        }
    }
    
    
    const handlePhoneNumberChange = (target, index) => {
        const updatedPhoneNumber = {...userData}
        updatedPhoneNumber.PhoneNumbers[index] = target
        setUserData(updatedPhoneNumber)
    }
    
    //const handleFormSubmission = () => { postUserData(); }
    const handleStatesAftSuccessFormSubmission = () => {
        setSubmitted(true);
        setUserData({
            FullName: "",
            EmailAddress:"",
            PhoneNumbers: [""],
            Message: "",
            bIncludeAddressDetails: false,
            AddressDetails: {
                AddressLine1: "",
                AddressLine2: "",
                CityTown: "",
                StateCounty: "",
                Postcode: "",
                Country: ""
            }
        
        })
        setErrMsg([])
    }
    const handleStatesAftFormSubmissionFailure = (err) => {
        setErrMsg(err.response.data.Errors)
    }
    
    const addPhoneNumber = () => { 
        setUserData({
            ...userData,
            PhoneNumbers: [...userData.PhoneNumbers, ""]
        })
    }
    const addAddressDetails = () => { 
        setUserData({
            ...userData,
            bIncludeAddressDetails : !userData.bIncludeAddressDetails
          })
    }
    
  /*
    const postUserData = async () => {
        try {
            //userData.PhoneNumbers = userData.PhoneNumbers.filter(_num => _num !== ""); //setUserData???
            const modUserData = {...userData, PhoneNumbers: userData.PhoneNumbers.filter(_num => _num !== "")} //1
            //let modUserData = {...userData} //2
            //modUserData.PhoneNumbers = modUserData.PhoneNumbers.filter(_num => _num !== ""); //2a//or 2b userData.PhoneNumbers.filter(_num => _num !== "")
            
           console.log(userData, modUserData) //different in 1 also different in 2
            const res = await axios.post("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", modUserData)
    
            if(res.status === 200 || res.statusText === "OK" || res.data.Status === "1" || res.data.Errors.length === 0){
                
                setSubmitted(true);
                setUserData({
                    FullName: "",
                    EmailAddress:"",
                    PhoneNumbers: [""],
                    Message: "",
                    bIncludeAddressDetails: false,
                    AddressDetails: {
                        AddressLine1: "",
                        AddressLine2: "",
                        CityTown: "",
                        StateCounty: "",
                        Postcode: "",
                        Country: ""
                    }
        
                })
                setErrMsg([])
                console.log("success", submitted==false?'false':'true')
            }
        }catch(err) {
            //console.log(err.message,err.status,err.statusCode,err.response,errMsg,err.response.status,err.response.statusText);
            setErrMsg(err.response.data.Errors)
        }
    
    } */

    useEffect(()=>console.log(submitted==false?'false':'true'),[submitted])

  return(
    <AppContext.Provider value={{
      dropDownManuShown, setDropDownManuShown,
      userData, setUserData,
      errMsg, setErrMsg,
      submitted, setSubmitted,
      handleInputChange, handlePhoneNumberChange, //handleFormSubmission,
      handleStatesAftSuccessFormSubmission, handleStatesAftFormSubmissionFailure,
      addPhoneNumber, addAddressDetails,
      showDropDownManu, alwaysHideDropDownManu,
      //...props
    }}>
      {children}
    </AppContext.Provider>
  );
};



export const useApp=()=>{
    const {
        dropDownManuShown, setDropDownManuShown,
        userData, setUserData,
        errMsg, setErrMsg,
        submitted, setSubmitted,
        handleInputChange, handlePhoneNumberChange, //handleFormSubmission,
        handleStatesAftSuccessFormSubmission, handleStatesAftFormSubmissionFailure,
        addPhoneNumber, addAddressDetails,
        showDropDownManu, alwaysHideDropDownManu,
        //...props
    } = useContext(AppContext);

    return {
        dropDownManuShown, setDropDownManuShown,
        userData, setUserData,
        errMsg, setErrMsg,
        submitted, setSubmitted,
        handleInputChange, handlePhoneNumberChange, //handleFormSubmission,
        handleStatesAftSuccessFormSubmission, handleStatesAftFormSubmissionFailure,
        addPhoneNumber, addAddressDetails,
        showDropDownManu, alwaysHideDropDownManu,
        //...props
    } //return a single obj
}
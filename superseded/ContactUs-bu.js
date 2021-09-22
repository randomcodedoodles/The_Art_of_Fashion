import { useEffect, useState } from "react"
import "../styles/App-container.css"
import "./styles/ContactUs.css"
import axios from "axios"
import valid from "../../Resources/Icon_Valid.svg"

import { useApp } from "../../contexts/AppContext"
import { ContactForm } from "./ContactUs"


export const ContactUs = () => { 
    const { dropDownManuShown } = useApp();

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
    /*
    const handleStatesAftRedirect = () => {
        setSubmitted(false);
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
    } */

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



    
    return (
        <section className={`App-container ${dropDownManuShown ? 'drop-down' : ''}`}>
            <ContactForm userData={userData} errMsg={errMsg} submitted={submitted}
                handleInputChange={handleInputChange} handlePhoneNumberChange={handlePhoneNumberChange}
                addPhoneNumber={addPhoneNumber} addAddressDetails={addAddressDetails}
                handleStatesAftSuccessFormSubmission={handleStatesAftSuccessFormSubmission} 
                handleStatesAftFormSubmissionFailure={handleStatesAftFormSubmissionFailure}/>
            
        </section>
    )
}
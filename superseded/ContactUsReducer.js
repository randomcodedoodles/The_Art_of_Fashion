import { useEffect, useReducer, useState } from "react"
import "../styles/App-container.css"
import "./styles/ContactUs.css"
import axios from "axios"
import valid from "../../Resources/Icon_Valid.svg"

import { useApp } from "../../contexts/AppContext"
//import { ContactForm } from "./ContactUs"
import { findAllInRenderedTree } from "react-dom/test-utils"


    const initialUserData = {
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
    }; 
    export const initialContactStates = {
        userData: initialUserData,
        errMsg: [],
        submitted: false,
    }


    export const contactReducer = (state, action) => {
        
        //const { type, payload: {userData, errMsg, submitted} } = action;
        const { type, payload } = action;
        /*if (!state.userData.bIncludeAddressDetails) {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [userData.name]: userData.value,
                }
            }
          } else { */
            switch (type) {
                // "Name_Email_Message":
                case "FullName":
                case "EmailAddress":
                case "Message": {console.log('ok', payload?.userData?.name, payload?.userData?.value)
                    return {
                        ...state,
                        userData: {
                            ...state.userData,
                            [payload?.userData?.name]: payload?.userData?.value,
                        }
                    }}
                case "PhoneNumbers": {console.log('ok', payload?.userData?.name, payload?.userData?.value)
                    const updatedPhoneNumber = {...state.userData}
                    updatedPhoneNumber.PhoneNumbers[payload?.userData?.phoneId] = payload?.userData?.value
                    return {
                        ...state,
                        userData: {
                            ...state.userData,
                            PhoneNumbers: updatedPhoneNumber.PhoneNumbers,
                        }
                    }
                }
                //case "Address_Details":
                case "AddressLine1":
                case "AddressLine2":
                case "CityTown":
                case "StateCounty":
                case "Postcode":
                case "Country":
                    return {
                        ...state,
                        userData: {
                            ...state.userData,
                            AddressDetails: {
                                ...state.userData.AddressDetails,
                                [payload?.userData?.name]: payload?.userData?.value,
                            }
                        }
                    }
                case "Add_Phone_Number":
                    return {
                        ...state,
                        userData: {
                            ...state.userData,
                            PhoneNumbers: [...state.userData.PhoneNumbers, ""]
                        }
                    }
                case "Add_Address_Details":
                    return {
                        ...state,
                        userData: {
                            ...state.userData,
                            bIncludeAddressDetails : !state.userData.bIncludeAddressDetails
                        }
                    }
                case "Reinstate_If_Succeed":
                    return {
                        userData: initialUserData,
                        errMsg: [],
                        submitted: true,
                    }
                case "Reinstate_If_Failed":
                    return {
                        ...state,
                        errMsg: payload?.errMsg,
                    }
                //case "Submit_Form":
                default:
          }
        }
    

/*
        export const ContactUs = () => { 
            const { dropDownManuShown } = useApp();
        
            const [contactStates, dispatch] = useReducer(contactReducer, initialContactStates);
            
            return (
                <section className={`App-container ${dropDownManuShown ? 'drop-down' : ''}`}>
                    <ContactForm contactStates={contactStates} dispatch={dispatch}/>
                    
                </section>
            )
        }
        */
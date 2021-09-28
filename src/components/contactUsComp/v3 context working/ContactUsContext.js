import { useReducer, createContext } from "react";
import { useApp } from "../../contexts/AppContext";
import { ContactUs } from "./ContactUs"
import "../styles/App-container.css"
import "./styles/ContactUs.css"
import { useContext } from "react/cjs/react.development";


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
//export const initialContactStates = {
const initialContactStates = {
    userData: initialUserData,
    errMsg: [],
    submitted: false,
}


//export const contactReducer = (state, action) => {
const contactReducer = (state, action) => {

    //const { type, payload: {userData, errMsg, submitted} } = action;
    const { type, payload } = action;

    switch (type) {
        // "Name_Email_Message":
        case "FullName":
        case "EmailAddress":
        case "Message": {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [payload?.userData?.name]: payload?.userData?.value,
                }
            }}
        case "PhoneNumbers": {
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
            return state
    }
}
    

/*
export const ContactUs = () => { 
    const { dropDownManuShown } = useApp();
    //const [{ userData, errMsg, submitted }, dispatch] = useReducer(contactReducer, initialContactStates); //1 & 2
    //const [contactStates, dispatch] = useReducer(contactReducer, initialContactStates); //3 & 4
    const value = useReducer(contactReducer, initialContactStates); //5
    return (
        <section className={`App-container ${dropDownManuShown ? 'drop-down' : ''}`}>
            <ContactForm value={value}/>
        </section>
    )
}
//<ContactForm userData={userData} errMsg={errMsg} submitted={submitted} dispatch={dispatch}/> // 1 ok
//<ContactForm value={{userData, errMsg, submitted, dispatch}}/> //2 ok
//<ContactForm contactStates={contactStates} dispatch={dispatch}/> //3 ok
//<ContactForm value={{contactStates, dispatch}}/> //4 ok
// <ContactForm value={value}/> //5 ok
*/

//export const ContactUsContext = createContext([[], ()=>{}]);
export const ContactUsContext = createContext();
export const ContactUsProvider = (props) => { //{children} //0
    //const { dropDownManuShown } = useApp();
    //const [{ userData, errMsg, submitted }, dispatch] = useReducer(contactReducer, initialContactStates); //a
    //const { FullName, EmailAddress, PhoneNumbers, bIncludeAddressDetails, Message, AddressDetails } = userData
    //const { AddressLine1, AddressLine2, CityTown, StateCounty, Postcode, Country } = AddressDetails
    //const [contactStates, dispatch] = useReducer(contactReducer, initialContactStates); //b
    const value = useReducer(contactReducer, initialContactStates); //c

    //console.log(userData, errMsg, submitted, dispatch)
    return (
        <ContactUsContext.Provider value={value} {...props}> 
            <ContactUs />
        </ContactUsContext.Provider>
    )
}
// <ContactUsContext.Provider value={}> {children} </ContactUsContext.Provider> //0

//<ContactUsContext.Provider value={{contactStates, dispatch}}> //b
//<ContactUsContext.Provider value={{ contactStates, dispatch }} {...props}> <ContactUs /> </ContactUsContext.Provider> //b1 b2
//<ContactUsContext.Provider value={{userData:contactStates.userData,errMsg:contactStates.errMsg,submitted:contactStates.submitted,dispatch}} {...props}> <ContactUs /></ContactUsContext.Provider>  //b3
//<ContactUsContext.Provider value={value}> //c //<ContactUsContext.Provider value={value} {...props}> <ContactUs /> </ContactUsContext.Provider>
//<ContactUsContext.Provider value={{ userData, errMsg, submitted, dispatch}}> <ContactUs /> </ContactUsContext.Provider> //a
//<ContactUsContext.Provider value={{ userData, errMsg, submitted, dispatch}} {...props}> //a  {...props} opt here
//<Route path="/contact-us" component={ContactUsProvider}/> in App.js; 
//import { ContactUsProvider } from "./components/contactUsComp/ContactUsContext"; in App.js


//{children} or <ContactUs />
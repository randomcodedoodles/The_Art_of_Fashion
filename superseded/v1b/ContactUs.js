
import axios from "axios"
import valid from "../../Resources/Icon_Valid.svg"
import { useEffect, useReducer, useRef, useState } from "react";
import { contactReducer, initialContactStates, useContactUsReducer } from "./ContactUsReducer";
import { useApp } from "../../contexts/AppContext";
import "../styles/App-container.css"
import "./styles/ContactUs.css"
import { TEMPLATE_ID_TO_CLIENT, TEMPLATE_ID_TO_XW, API_ROOT_POST_USER_CONTACTS, MAX_CHARS } from "../../constants";
import emailjs from "emailjs-com"
export const ContactUs = () => { 
    const { dropDownManuShown } = useApp();
    //const [{ userData, errMsg, submitted }, dispatch] = useReducer(contactReducer, initialContactStates);
    const [{ userData, errMsg, submitted }, dispatch] = useContactUsReducer()
    const form = useRef();
    const [charsLeft, setCharsLeft] = useState(MAX_CHARS)
    
    //const [postDataSuccessful, setPostDataSuccessful] = useState(false)

    const handleUserDataPost = async (e) => {
        try {
            const modUserData = {...userData, PhoneNumbers: userData.PhoneNumbers.filter(_num => _num !== "")};
            const res = await axios.post(API_ROOT_POST_USER_CONTACTS, modUserData)

            if(res.status === 200 || res.statusText === "OK" || res.data.Status === "1" || res.data.Errors.length === 0){
                //dispatch({type: "Send_Email", payload: {form: e.target}})
                dispatch({type: "Send_Email", payload: {form: form.current, template: TEMPLATE_ID_TO_XW}})
                dispatch({type: "Send_Email", payload: {form: form.current, template: TEMPLATE_ID_TO_CLIENT}})
            /*    emailjs.sendForm('service_988w7ee', TEMPLATE_ID_TO_CLIENT, form.current, "user_Ef6Xc4TKxklb2iQWThhYT")
            .then((result) => {
                console.log(result.status, result.text);
            }, (error) => {
                console.log(error.text, error);
            });*/
                
                dispatch({type: "Reinstate_If_Succeed"}); 

                //dispatch({type: "test", payload: {form: form.current, template: TEMPLATE_ID_TO_CLIENT}})
                //case test similar to create postdatasuccessful state, if 200 above change postdatasuccessful state, 
                //then useeffect (wrt postdatasuccessful) call fn (above two dispatch send-email and/or dispatch reinstate)
                //setPostDataSuccessful(true)
                //dispatch({type: "Reinstate_If_Succeed"}); //or moved to sendemail below with above two dispatch sendemail cases-> turned out wrong

            }
        }catch(err) {
            console.log(err)
            dispatch({type: "Reinstate_If_Failed", payload: {errMsg: err.response?.data.Errors}});
        }

    }
    /*
    const sendEmail = () => {
        dispatch({type: "Send_Email", payload: {form: form.current, template: TEMPLATE_ID_TO_XW}})
        //dispatch({type: "Send_Email", payload: {form: form.current, template: TEMPLATE_ID_TO_CLIENT}})
        dispatch({type: "Reinstate_If_Succeed"});
    }
    useEffect(()=>sendEmail(),[postDataSuccessful]) //run sendemail (run send-email case and/or reinstate case) first loaded 
    */
    const formSubmissionHandler = (e) => { 
        e.preventDefault();
        handleUserDataPost(e);
    }

    const addPhoneNum = (e) => { 
        e.preventDefault();
        dispatch({type: "Add_Phone_Number"});
    }

    const inputChangeHandler = (e, index = 0) => {
        //console.log('enter')
        const { name, value } = e.target;
        if(name.startsWith("phone")) dispatch({type: "PhoneNumbers", payload: {userData: {name: "PhoneNumbers", phoneId: index, value}}});
        else { 
            dispatch({type: name, payload: {userData: {name, value}}}); 
            if(name === "Message") setCharsLeft(MAX_CHARS - value.length)
        }
    }


    

    return (
        <section className={`App-container ${dropDownManuShown ? 'drop-down' : ''}`}>
            <div className="contact-us">
                <div className="contact-form">
                    <h3 className="contact-title"> Contact Us</h3>
                    <p className="contact-subject">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Explicabo maxime quae quod. Vero, quasi saepe. Laborum, minus. 
                    </p>
                    
                    {submitted ? (
                    <div className="submit-success">
                        <div className="submit-valid"><img src={valid} alt="submit successfully" /></div>
                        <div className="submit-text">
                            <h5 className="submit-msg">Your Message has been sent </h5>
                            <p className="submit-note">We will be in touch of you within 24 hours</p>
                        </div>
                    </div>
                    ) : ( 
                    <form action="" className="form primary" onSubmit={(e) => { formSubmissionHandler(e); }} ref={form} id="ContactUsForm">
                        <div className="secondary name-email">
                            <div className="form-group half name">
                                <label htmlFor="FullName" className="form-label">Full name </label>
                                <input type="text" id="FullName" name="FullName" className="form-control" value={userData.FullName} required onChange={inputChangeHandler}/>
                            </div>
                            <div className="form-group half email">
                                <label htmlFor="EmailAddress" className="form-label">Email address </label>
                                <input type="text" id="EmailAddress" name="EmailAddress" className="form-control" value={userData.EmailAddress} required onChange={inputChangeHandler}/>
                            </div>
                        </div>
                        {userData?.PhoneNumbers.map((_phone, _index) => {return (
                            <div className={`form-group primary phone phone${_index}`} key={_index}>
                                <label htmlFor={`phone${_index}`} className="form-label">Phone Number {_index <= 8 ? '0' + (_index + 1) : (_index + 1)} <span className="contact-inline">- Optional </span> </label>
                                <input type="text" id={`phone${_index}`} name={`phone${_index}`} className="form-control" value={userData?.PhoneNumbers[_index]} onChange={e => {inputChangeHandler(e, _index)}}/>
                            </div>
                        )})}
                        <div className="add-phone primary phone-btn" onClick={addPhoneNum}>
                            Add new phone number
                        </div>
                        <div className="form-group message primary">
                            <label htmlFor="Message" className="form-label">Message: <span className="max-length-req">Maximum text length is 500 characters</span> </label>
                            
                            <textarea id="Message" name="Message" className="form-control" value={userData.Message} required maxLength={MAX_CHARS} onChange={inputChangeHandler}/>
                            <div className={`remaining-chars ${charsLeft < 100 ? 'orange-flag' : ''} ${charsLeft < 20 ? 'red-flag' : ''}`}>{charsLeft} characters left</div>
                        </div>
                        <div className="add-address primary">
                            <div className={`checkbox ${userData.bIncludeAddressDetails ? "checked" : ""}`} id="bIncludeAddressDetails" name="bIncludeAddressDetails" onClick={() => dispatch({type: "Add_Address_Details"})} value={userData.bIncludeAddressDetails}></div>
                            <label htmlFor="bIncludeAddressDetails" className="form-label address">Add address details? </label>
                        </div>
                        {userData.bIncludeAddressDetails ? (<>
                        <div className="secondary address">
                            <div className="form-group half address-line1">
                                <label htmlFor="AddressLine1" className="form-label">Addres Line1: </label>
                                <input type="text" id="AddressLine1" name="AddressLine1" className="form-control" value={userData?.AddressDetails?.AddressLine1} required onChange={inputChangeHandler}/>
                            </div>
                            <div className="form-group half address-line2">
                                <label htmlFor="AddressLine12" className="form-label">Address line2: </label>
                                <input type="text" id="AddressLine2" name="AddressLine2" className="form-control" value={userData?.AddressDetails?.AddressLine2} onChange={inputChangeHandler}/>
                            </div>
                        </div>
                        <div className="secondary address district">
                            <div className="address-1 half">
                                <div className="secondary address-detail1">
                                    <div className="form-group quarter address-detail1">
                                        <label htmlFor="CityTown" className="form-label">City/town: </label>
                                        <input type="text" id="CityTown" name="CityTown" className="form-control" value={userData?.AddressDetails?.CityTown} required onChange={inputChangeHandler}/>
                                    </div>
                                    <div className="form-group quarter address-detail1">
                                        <label htmlFor="county" className="form-label"> state/county: </label>
                                        <input type="text" id="StateCounty" name="StateCounty" className="form-control" value={userData?.AddressDetails?.StateCounty} required onChange={inputChangeHandler}/>
                                    </div>
                                </div>
                            </div>
                            <div className="address-2 half">
                                <div className="secondary address-detail2">
                                    <div className="form-group quarter address-detail2">
                                        <label htmlFor="Postcode" className="form-label">postcode: </label>
                                        <input type="text" id="Postcode" name="Postcode" className="form-control" value={userData?.AddressDetails?.Postcode} required onChange={inputChangeHandler}/>
                                    </div>
                                    <div className="form-group quarter address-detail2">
                                        <label htmlFor="Country" className="form-label"> country: </label>
                                        <input type="text" id="Country" name="Country" className="form-control" value={userData?.AddressDetails?.Country} required onChange={inputChangeHandler}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </>):<></>}
                        {errMsg.length > 0 ? (
                        errMsg.map((_errmsg, _index) => (
                            <p className="error-msg">* {_errmsg.FieldName} : {_errmsg.MessageCode}! </p>
                        ))
                        ) : <></>}
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>)}

                    
                </div>
            
            </div>
        </section>
    )
}
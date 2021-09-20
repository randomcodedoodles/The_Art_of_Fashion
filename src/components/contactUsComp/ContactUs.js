import { useEffect, useState } from "react"
import "../styles/App-container.css"
import "./styles/ContactUs.css"
import axios from "axios"
import valid from "../../Resources/Icon_Valid.svg"

import { useApp } from "../../contexts/AppContext"


export const ContactUs = () => { //(props)

    const { userData, errMsg, submitted, dropDownManuShown,
        handleInputChange, handlePhoneNumberChange, //handleFormSubmission,
        handleStatesAftSuccessFormSubmission, handleStatesAftFormSubmissionFailure,
        addPhoneNumber, addAddressDetails
    } = useApp();

    /*
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

    
    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        if (!userData.bIncludeAddressDetails) {
            setUserData({
                ...userData,
                [name] : value
            })
          } else {
            switch (name) {
                case "FullName":
                case "EmailAddress":
                case "Message":
                    setUserData({
                        ...userData,
                        [name] : value
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
                          [name] : value
                        }
                      });
                      break;
                default:
          }
        }
    }
    //onChange={handleInputChange}

    
    const handlePhoneNumberChange = (e, index) => {
        const updatedPhoneNumber = {...userData}
        updatedPhoneNumber.PhoneNumbers[index] = e.target.value
        setUserData(updatedPhoneNumber)
    }
    <input type="text" id={`phone${_index}`} name={`phone${_index}`} className="form-control" value={userData?.PhoneNumbers[_index]} onChange={(e) => {handlePhoneNumberChange(e, _index)}}/>

    const handleFormSubmission = (e) => { 
        e.preventDefault();
        postUserData();
    }
    //<form action="" className="form primary" onSubmit={(e) => {handleFormSubmission(e)}}> or onSubmit={handleFormSubmission}

    const addPhoneNumber = (e) => { 
        e.preventDefault();
        setUserData({
            ...userData,
            PhoneNumbers: [...userData.PhoneNumbers, ""]
        })
    }
    //<div className="add-phone primary phone-btn" onClick={addPhoneNumber}> or onClick={(e) => { addPhoneNumber(e); }}

    const addAddressDetails = (e) => { 
        setUserData({
            ...userData,
            bIncludeAddressDetails : !userData.bIncludeAddressDetails
          })
    }

    
    
    const postUserData = async () => {
        try {
            userData.PhoneNumbers = userData.PhoneNumbers.filter(_num => _num !== "");
            const res = await axios.post("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", userData)

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
            }
        }catch(err) {
            //console.log(err.message,err.status,err.statusCode,err.response,errMsg,err.response.status,err.response.statusText);
            setErrMsg(err.response.data.Errors)
        }

    }
    */

    const handleUserDataPost = async () => {
        try {
            const modUserData = {...userData, PhoneNumbers: userData.PhoneNumbers.filter(_num => _num !== "")};
            const res = await axios.post("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", modUserData)

            if(res.status === 200 || res.statusText === "OK" || res.data.Status === "1" || res.data.Errors.length === 0){
                handleStatesAftSuccessFormSubmission();
            }
        }catch(err) {
            handleStatesAftFormSubmissionFailure(err);
        }

    }
    const formSubmissionHandler = (e) => { 
        e.preventDefault();
        //handleFormSubmission(); //from useApp()
        handleUserDataPost();
        console.log(userData.PhoneNumbers.length, userData)
    }

    const addPhoneNum = (e) => { 
        e.preventDefault();
        addPhoneNumber();
    }

    const inputChangeHandler = (e) => {
        handleInputChange(e.target.name, e.target.value)
    }

    useEffect(()=>console.log(submitted, 'hello'),[])

    //<section className={`App-container ${props.dropDownManuShown ? 'drop-down' : ''}`}>
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
                        <form action="" className="form primary" onSubmit={(e) => {formSubmissionHandler(e)}}>
                            <div className="secondary name-email">
                                <div className="form-group half name">
                                    <label htmlFor="FullName" className="form-label">Full name </label>
                                    <input type="text" id="FullName" name="FullName" className="form-control" value={userData.FullName} required onChange={(e) => handleInputChange(e.target.name, e.target.value)}/>
                                </div>
                                <div className="form-group half email">
                                    <label htmlFor="EmailAddress" className="form-label">Email address </label>
                                    <input type="text" id="EmailAddress" name="EmailAddress" className="form-control" value={userData.EmailAddress} required onChange={(e) =>{ console.log(e.target.value);handleInputChange(e.target.name, e.target.value)}}/>
                                </div>
                            </div>
                            {userData?.PhoneNumbers.map((_phone, _index) => {return (
                                <div className={`form-group primary phone phone${_index}`} key={_index}>
                                    <label htmlFor={`phone${_index}`} className="form-label">Phone Number {_index <= 8 ? '0' + (_index + 1) : (_index + 1)} <span className="contact-inline">- Optional </span> </label>
                                    <input type="text" id={`phone${_index}`} name={`phone${_index}`} className="form-control" value={userData?.PhoneNumbers[_index]} onChange={(e) => {handlePhoneNumberChange(e.target.value, _index)}}/>
                                </div>
                            )})}
                            <div className="add-phone primary phone-btn" onClick={addPhoneNum}>
                                Add new phone number
                            </div>
                            <div className="form-group message primary">
                                <label htmlFor="Message" className="form-label">Message: <span className="max-length-req">Maximum text length is 500 characters</span> </label>
                                
                                <textarea id="Message" name="Message" className="form-control" value={userData.Message} required maxLength="500" onChange={(e) => {handleInputChange(e.target.name, e.target.value)}}/>
                            </div>
                            <div className="add-address primary">
                                <div className={`checkbox ${userData.bIncludeAddressDetails ? "checked" : ""}`} id="bIncludeAddressDetails" name="bIncludeAddressDetails" onClick={addAddressDetails} value={userData.bIncludeAddressDetails}></div>
                                <label htmlFor="bIncludeAddressDetails" className="form-label address">Add address details? </label>
                            </div>
                            {userData.bIncludeAddressDetails ? (<>
                            <div className="secondary address">
                                <div className="form-group half address-line1">
                                    <label htmlFor="AddressLine1" className="form-label">Addres Line1: </label>
                                    <input type="text" id="AddressLine1" name="AddressLine1" className="form-control" value={userData?.AddressDetails?.AddressLine1} required onChange={e => { inputChangeHandler(e) }}/>
                                </div>
                                <div className="form-group half address-line2">
                                    <label htmlFor="AddressLine12" className="form-label">Address line2: </label>
                                    <input type="text" id="AddressLine2" name="AddressLine2" className="form-control" value={userData?.AddressDetails?.AddressLine2} onChange={(e) => { inputChangeHandler(e); }}/>
                                </div>
                            </div>
                            <div className="secondary address district">
                                <div className="address-1 half">
                                    <div className="secondary address-detail1">
                                        <div className="form-group quarter address-detail1">
                                            <label htmlFor="CityTown" className="form-label">City/town: </label>
                                            <input type="text" id="CityTown" name="CityTown" className="form-control" value={userData?.AddressDetails?.CityTown} required onChange={(e) => inputChangeHandler(e) }/>
                                        </div>
                                        <div className="form-group quarter address-detail1">
                                            <label htmlFor="county" className="form-label"> state/county: </label>
                                            <input type="text" id="StateCounty" name="StateCounty" className="form-control" value={userData?.AddressDetails?.StateCounty} required onChange={e => inputChangeHandler(e)}/>
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
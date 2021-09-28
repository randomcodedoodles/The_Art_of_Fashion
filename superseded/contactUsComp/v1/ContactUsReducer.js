


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
    }
}
    

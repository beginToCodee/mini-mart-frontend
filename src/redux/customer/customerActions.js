import * as All from './customerTypes';


export const fetchCustomerRequest = ()=>{
    return {
        type:All.FETCH_CUSTOMER_REQUEST
    }
}

export const fetchCustomerSuccess = data=>{
    return {
        type:All.FETCH_CUSTOMER_SUCCESS,
        payload:data
    }
}

export const fetchCustomerFailure = error=>{
    return {
        type:All.FETCH_CUSTOMER_FAILURE,
        payload:error
    }
}
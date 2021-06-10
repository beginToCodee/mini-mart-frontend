import * as All from './productTypes';


export const fetchItemRequest = ()=>{
    return {
        type:All.FETCH_ITEM_REQUEST
    }
}

export const fetchItemSuccess = items=>{
    return {
        type:All.FETCH_ITEM_SUCCESS,
        payload:items
    }
}

export const fetchItemFailure = error=>{
    return {
        type:All.FETCH_ITEM_FAILURE,
        payload:error
    }
}
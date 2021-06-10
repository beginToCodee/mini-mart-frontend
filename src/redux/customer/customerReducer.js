import * as All from './customerTypes';


const initialState = {
    loading:false,
    customer:{},
    error:{}
}

const customerReducer = (state=initialState,action)=>{
    switch (action.type){
        case All.FETCH_CUSTOMER_REQUEST:
            return {
                loading:true,
                customer:{},
                error:{}
            }
        case All.FETCH_CUSTOMER_SUCCESS:
            return {
                loading:false,
                customer:action.payload,
                error:{}
            }
        case All.FETCH_CUSTOMER_FAILURE:
            return {
                loading:false,
                customer:{},
                error:action.payload,
            }
        default:
            return state;
    }
}

export default customerReducer;
import * as All from './categoryTypes';


const initialState = {
    loading:false,
    items:[],
    error:''
}

const categoryReducer = (state=initialState,action)=>{
    switch (action.type){
        case All.FETCH_ITEM_REQUEST:
            return {
                loading:true,
                items:[],
                error:''
            }
        case All.FETCH_ITEM_SUCCESS:
            return {
                loading:false,
                items:action.payload,
                error:''
            }
        case All.FETCH_ITEM_FAILURE:
            return {
                loading:false,
                items:[],
                error:action.payload,
            }
        default:
            return state;
    }
}

export default categoryReducer;
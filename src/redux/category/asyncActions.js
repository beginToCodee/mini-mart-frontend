import * as All from './categoryActions';
import axios from 'axios';






export const fetchCategory =()=>{
    return dispatch=>{
        dispatch(All.fetchItemRequest());
        const url = `/store-api/categories/`;
        axios(url).then(resp=>{
            const data = resp.data;
            dispatch(All.fetchItemSuccess(data));
        }).catch(error=>{
            dispatch(All.fetchItemFailure(error));
        })
        
    }
}
import * as All from './productActions';
import axios from 'axios';






export const fetchItem =(category='',query='')=>{
    return dispatch=>{
        dispatch(All.fetchItemRequest());
        const url = `/product-api/?category=${category}&query=${query}`;
        // console.log(url)
        axios(url).then(resp=>{
            const data = resp.data;
            console.log(data)
            dispatch(All.fetchItemSuccess(data));
        }).catch(error=>{
            dispatch(All.fetchItemFailure(error));
        })
        
    }
}
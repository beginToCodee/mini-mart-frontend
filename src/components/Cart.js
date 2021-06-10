import React,{useState,useEffect} from 'react';
// import {Table} from 'react-bootstrap';
import '../App.css';


const Cart = ()=>{

    const [items,setItem] = useState([]);
	useEffect(()=>{
		fetchItems();
	},[]);

	const fetchItems = ()=>{
		const url = `https://fakestoreapi.com/products`;
		fetch(url).then(res=>res.json()).then(json_data=>{
			setItem(json_data);
		})
	}

    const decrement_quanity = item=>{
        console.log("decrement");
    }
    const increment_quanity = item=>{
        console.log("increment");
    }
    const get_table_data = ()=>{
        const list = items.map((item,index)=>{
            return(
                <tr key={item.id} className="table_row" >
                    <td>{index+1}</td>
                    <td>
                        <img src={item.image} className="img-fluid img_thumbnail" />
                    </td>
                    <td>Tshirt</td>
                    <td>Rs {item.price}</td>
                    <td>
                        <small className="btn btn-outline-warning btn-sm py-0 ">-</small>
                        <small className="border border-secondary px-2 py-1 mx-2">3</small>
                        <small className="btn btn-outline-warning btn-sm py-0 ">+</small>
                    </td>
                    <td>Rs {item.price}</td>
                    <td>delete</td>
                </tr>
            )
        });
        return list;
    }

    return(
        <div className="Cart container shadow p-3 mb-3 bg-white rounded">
            <button className="btn btn-outline-info"> back to shopping</button>
            <div className="Cart_Table my-2">
            <table className="table "> 
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quanity</th>
                            <th>Total Amount</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                            {get_table_data()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5" className="text-right text-info">Grand Total Amount</td>
                                <td colSpan="2" className="text-secondary">Rs 50000</td>
                            </tr>
                        </tfoot>
                </table>
                
            </div>
            <hr />
            <div className="justify-content-end d-flex">
            <button className="btn btn-outline-warning">Check Out</button>
            </div>
        </div>
    )
}

export default Cart;
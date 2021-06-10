import React,{useState,useEffect}  from 'react';
import '../App.css';


const Order = ()=>{
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

	const get_item_rows = ()=>{
		const list = items.map((item,index)=>{
			return(
					<tr key={item.id}>
					      <th scope="row">{index+1}</th>
					      <td>
					      	<img src={item.image} className="img-fluid img_thumbnail" />
					      </td>
					      <td>V t-shirt</td>
					      <td>Rs {item.price}</td>
					      <td>3</td>
					      <td>Rs {item.price}</td>
					      <td>
					      	2029 apr 26
					      </td>
					      <td>
					      	<span className="badge bg-warning">
					      		pending
					      	</span>
					      </td>
					    </tr>
				)
		});
		return list;
	}
	return (
			<div className="order container shadow p-3 mb-3 bg-white rounded">
				<div className="order_table">
					<table className="table">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Image</th>
					      <th scope="col">Title</th>
					      <th scope="col">Price</th>
					      <th scope="col">Quantity</th>
					      <th scope="col">Total Amount</th>
					      <th scope="col">Date & Time</th>
					      <th scope="col">Status</th>

					      

					    </tr>
					  </thead>
					  <tbody>
					    
					    {get_item_rows()}
					    
					  </tbody>
					</table>
				</div>
			</div>
		)
}

export default Order;
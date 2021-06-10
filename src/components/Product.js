
import React,{useState,useEffect} from 'react';
import {Row, Col,Card,Button} from 'react-bootstrap';
import '../App.css';
import * as AllProduct from '../redux/product/asyncActions';
import {connect} from 'react-redux';

const Product = props=>{
	const [items,setItem] = useState([]);
	useEffect(()=>{
		props.fetchItem()

		// 
		setItem(props.product.items);
		console.log(props.product.items)
	},[props.product.items]);

	const get_product_card = item=>{
		return (
				<Card className="mb-4 card">
					  <img src={item.image} className="card-img-top" alt="..." />
					  	<Card.Body>
					    <Card.Title className="card-title">{item.title}</Card.Title>
					    <Card.Text>
					      <span>Rs {item.price}</span>
					    </Card.Text>
					    <Button variant="outline-warning" size="sm">Add Cart</Button>
					  </Card.Body>
				</Card>
			)
	}

	return (
			<Row>
				{items.map(item=>{
						return(
								<Col key={item.id} lg={3} md={4}>
									{get_product_card(item)}
								</Col>
							);
					})}
				
			</Row>
		)
}

const mapStateToProps = state=>{
	return {
		product:state.product,
		
	}
}

const mapDispatchToProps = dispatch=>{

	return {
		fetchItem:()=>dispatch(AllProduct.fetchItem()),
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);

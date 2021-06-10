import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Product from './Product';
import Menu from './Menu';
import Discount from './Discount';



const Home = props=>{
	


	
	return (
			<div className="Home">
				<Discount />
				<Container className="home">
					<Menu />
					<Product />	
				</Container>
			</div>
		)
}

export default Home;
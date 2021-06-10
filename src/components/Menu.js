import React,{useState,useEffect} from 'react';
import {Row,Col,Nav,NavDropdown,Navbar,Button,Form,FormControl,InputGroup} from 'react-bootstrap';
import '../App.css';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import * as AllCategory from '../redux/category/asyncActions';
import {connect} from 'react-redux';
import * as AllProduct from '../redux/product/asyncActions';


const Menu = props=>{
	const [categories,setCategory] = useState(
		['Food','Chocolate','Cosmetic','Clothes']
		);
	const [subcategories,setSubcategory] = useState(
		['Rice','Chamal','Vaat','Vegetables']
		) 
	useEffect(()=>{
		console.log("menu")
	},[]);

	const handleCategory = ()=>{
		console.log("hello")

	}
	const get_subcategories = (val)=>{
		let k = val+10;
		const list = subcategories.map(scat=>{
			k++;
			return(<NavDropdown.Item key={k}  onClick={handleCategory} className="bg-light">{scat}</NavDropdown.Item>)
		})
		return list;
	}
	const get_categories = ()=>{
		let k = 0;

		const list = categories.map(category=>{
			k++;
			return (
					<DropdownSubmenu key={k} title={category}>
						{get_subcategories(k)}
	            	</DropdownSubmenu>
				)
		})
		return [<NavDropdown.Item onClick={handleCategory} key={0}>All</NavDropdown.Item>,...list];
	}

	return (
			<>
				<Navbar expand="md" className="menu_navbar mb-4">
		  
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
		          
			          <NavDropdownMenu title={
					        <span className="text-light h5">Select Categories</span>}>
			            {get_categories()}
			          </NavDropdownMenu>
			        </Nav>
				    <Form className="search_menu">
						<input className="form-control"  placeholder="Search" />
					</Form>
				  </Navbar.Collapse>
				</Navbar>

			</>			
		)
}
const mapStateToProps = state=>{
	return {
		category:state.category,
		
	}
}

const mapDispatchToProps = dispatch=>{

	return {
		fetchCategory:()=>dispatch(AllCategory.fetchCategory()),
		fetchProduct:(category,query)=>dispatch(AllProduct.fetchItem(category,query)),
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
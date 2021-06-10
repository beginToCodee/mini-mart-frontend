import React,{useEffect,useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {Modal,Button,Cotnainer,Row,Col, Container} from 'react-bootstrap';

const AuthContainer = props=>{
 
   const [login,setLogin] = useState(true);
   
   useEffect(()=>{
   
   	setLogin(true);

   },[]);
   

  return (
    <>
      <Container className="mt-5 py-5">
        <Row>
          <Col lg={5} className="mx-auto mt-5 shadow-lg pb-3 mb-5 bg-body rounded">
            <div className="">
              <div className="row bg-light mb-2 p-2">
              <div className="col border-right border-warning">
                <button type="button" className="btn btn-light btn-block" onClick={e=>setLogin(true)}>Login Section</button>

              </div>
              <div className="col">
                <button type="button" className="btn btn-light btn-block" onClick={e=>setLogin(false)}>SignUp Section</button>

              </div>

            </div>
            {login?<Login/>:<SignUp/>}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AuthContainer;
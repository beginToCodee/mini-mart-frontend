import React from 'react';



const Login = ()=>{

	return (
			<div className="Login">
				<form>
					<div className="mb-3">
						<label for="id_email">Email</label>
						<input className="form-control" type="email" id="id_email" placeholder="Enter Email Address"/>
					</div>
					<div className="mb-3">
						<label for="id_password">Password</label>
						<input className="form-control" type="password" placeholder="Enter Password"/>
					</div>

					<button type="submit" className="btn btn-outline-primary">Login</button>
				</form>
			</div>
		)
}

export default Login;
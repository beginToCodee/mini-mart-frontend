import React from 'react';



const SignUp = ()=>{

	return (
			<div className="SignUp">

				<form>
					<div className="mb-3">
						<label for="id_email">Email</label>
						<input className="form-control" type="email" id="id_email" placeholder="Enter Email Address"/>
					</div>
					<div className="mb-3">
						<label for="id_contact">Contact No.</label>
						<input className="form-control" type="text" id="id_contact" placeholder="Enter Contact Number"/>
					</div>

					<div className="mb-3">
						<label for="id_password">Password</label>
						<input className="form-control" type="password" placeholder="Enter Password"/>
					</div>
					<div className="mb-3">
						<label for="id_password">Re-Password</label>
						<input className="form-control" type="password" placeholder="Enter Re-Password"/>
					</div>

					<button type="submit" className="btn btn-outline-success">SignUp</button>
				</form>
			</div>
		)
}

export default SignUp;
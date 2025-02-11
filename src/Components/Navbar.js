import React from 'react';
import { useAuth } from '../AuthContext';

function Navbar() {
	const {user} = useAuth();

	return(<nav id='navbar'>
		<h1 style={{fontSize : "2rem"}}>Signup Form</h1>
		{user ? <h2>Welcome {user.username}!</h2> : <h2>Please login</h2>}
	</nav>);
}

export default Navbar;
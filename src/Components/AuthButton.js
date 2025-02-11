import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

function AuthButtton() {
	const {user, login, logout} = useAuth();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	return(<div id='auth-container'>
		{!user ? (
			<form onClick={(e) => e.preventDefault()}>
				<input type='text' placeholder='Enter Username' value={userName} onChange={(e) => setUserName(e.target.value)} required />
				<input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
				<button id='login-btn' onClick={() => login(userName)}>Login</button>
				</form>
			) : (
				<button type='submit' id='logout-btn' onClick={logout}>Logout</button>
			)}
	</div>);
}

export default AuthButtton;
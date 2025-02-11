import React, {useState} from 'react';
import { createContext, useContext } from 'react';

//Creating AuthContext
const AuthContext = createContext();

//Auth Provider Component
function AuthForm({children}) {
	const storedUser = JSON.parse(localStorage.getItem("user")) || null;
	const [user, setUser] = useState(storedUser);

	//Login function
	function login(username) {
		const userdata = {username};
		setUser(userdata);
		localStorage.setItem("user", JSON.stringify(userdata));
	}

	//Logout function
	function logout() {
		setUser(null);
		localStorage.removeItem("user");
	}

	return(<div>
		<AuthContext.Provider value={{user, login, logout}}>
			{children}
		</AuthContext.Provider>
	</div>);
}

//Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

export default AuthForm;
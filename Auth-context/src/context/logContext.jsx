import { createContext, useState } from 'react';
import axios from 'axios';
export const LogContext = createContext();

export const LogContextProvider = ({ children }) => {
	const [isAuth, setisAuth] = useState(false);

	const handleAuth = () => {
		if (!isAuth) {
			axios.post('https://reqres.in/api/login', {
					email: 'eve.holt@reqres.in',
					password: 'cityslicka',
				})
				.then(function (response) {
                    var {token} = response.data
                    console.log(token)
				})
				.catch(function (error) {
					console.log(error);
				});
		}
		isAuth ? setisAuth(false) : setisAuth(true);
       
	};
	return (
		<LogContext.Provider value={{ isAuth, handleAuth }}>
			{children}
		</LogContext.Provider>
	);
};

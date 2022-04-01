
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config.js";


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(setUser);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

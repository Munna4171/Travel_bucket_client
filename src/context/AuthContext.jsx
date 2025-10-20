import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context object
const AuthContext = createContext(null);

// 2. Custom Hook for easy consumption
export const useAuth = () => {
    return useContext(AuthContext);
};

// 3. Provider Component
export const AuthProvider = ({ children }) => {
    // This state will hold the user object after successful login/signup
    // Example structure: { username: '...', email: '...', avatar: '...' }
    const [currentUser, setCurrentUser] = useState(null);

    // Function to check if the user is authenticated (simple check)
    const isAuthenticated = currentUser !== null;

    const value = {
        currentUser,
        setCurrentUser, // This is the function the SignIn/SignUp components will call
        isAuthenticated,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = (user, email, password) => {
    setUser(user);
    setEmail(email);
    setPassword(password);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, email, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
}

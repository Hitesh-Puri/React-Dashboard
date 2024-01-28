import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    // Check localStorage for user data on page reload
    const storedUser = localStorage.getItem("user");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setEmail(JSON.parse(storedEmail));
      setPassword(JSON.parse(storedPassword));
    }
  }, []);

  const login = (user, email, password) => {
    setUser(user);
    setEmail(email);
    setPassword(password);

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  };

  const logout = () => {
    setUser(null);

    // Remove user data from localStorage on logout
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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

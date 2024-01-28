import React from "react";
import "./styles/global.scss";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import FinancialInfo from "./pages/financialInfo/FinancialInfo";
import ContactInfo from "./pages/contactInfo/ContactInfo";
import CreditDetails from "./pages/users/Users";
import Footer from "./components/footer/Footer";
import { AuthProvider, useAuth } from "./utility/auth";
import { Login } from "./pages/login/Login";
import { Profile } from "./components/profile/Profile";
import { RequireAuth } from "./utility/RequireAuth";

function App() {
  const Layout = () => {
    const navigate = useNavigate();
    const user = useAuth();

    // Redirect to login if user is not authenticated
    React.useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user, navigate]);

    return (
      <AuthProvider>
        <div className="main">
          <Navbar />
          <div className="container">
            <div className="menuContainer">
              <Menu />
            </div>
            <div className="contentContainer">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <RequireAuth>
              <Home />
            </RequireAuth>
          ),
        },
        {
          path: "/creditDetails",
          element: (
            <RequireAuth>
              <CreditDetails />
            </RequireAuth>
          ),
        },
        {
          path: "/financialInfo",
          element: (
            <RequireAuth>
              <FinancialInfo />
            </RequireAuth>
          ),
        },
        {
          path: "/financialAnalysis",
          element: (
            <RequireAuth>
              <FinancialInfo />
            </RequireAuth>
          ),
        },
        {
          path: "/documents",
          element: (
            <RequireAuth>
              <ContactInfo />
            </RequireAuth>
          ),
        },
        {
          path: "/contactInfo",
          element: (
            <RequireAuth>
              <ContactInfo />
            </RequireAuth>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: (
            <Profile />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

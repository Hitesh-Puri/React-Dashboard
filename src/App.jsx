import React from 'react'
import './styles/global.scss';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Menu from './components/menu/Menu';
import FinancialInfo from './pages/financialInfo/FinancialInfo';
import ContactInfo from './pages/contactInfo/ContactInfo';
import CreditDetails from './pages/users/Users';
import Footer from './components/footer/Footer';

function App() {
  const Layout = () => {
    return (
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
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/creditDetails",
          element: <CreditDetails />,
        },
        {
          path: "/financialInfo",
          element: <FinancialInfo />,
        },
        {
          path: "/financialAnalysis",
          element: <FinancialInfo />,
        },
        {
          path: "/documents",
          element: <ContactInfo />,
        },
        {
          path: "/contactInfo",
          element: <ContactInfo />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage/landingPage';
// import Navbar from './components/Navbar/navbar';
import App from './App';
import About from './pages/About/about';
import FindVehicleDetails from './pages/FindVehicleDetails/findVehicleDetails';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import SiteCreator from './pages/SiteCreator/siteCreator';
import VehicleGallery from './pages/VehicleGallery/vehicleGallery';
// import Home from './pages/Home/home';
import ErrorCode404 from './pages/ErrorCode404/errorCode404';
import Help from './pages/Help/help'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorCode404 />
  },
  // {
  //   path: '/landingPage',
  //   element: <LandingPage />
  // },
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/findVehicleDetails',
    element: <FindVehicleDetails />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/siteCreator',
    element: <SiteCreator />
  },
  {
    path: '/vehicleGallery',
    element: <VehicleGallery />
  },
  {
    path: '/help',
    element: <Help />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {window.location.pathname === '/landingPage' ? "" : <Navbar />} */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


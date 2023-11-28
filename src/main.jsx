import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Help from './Pages/Help'
import Listing from './Pages/Listing'
import ParkingDetails from './Pages/ParkingDetails'
import ParknerSignup from './Pages/ParknerSignup'
import UserSignup from './Pages/UserSignup'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardRoute from './Components/DashboardRoute'
import Dashboard from './Pages/Dashboard'
import HowItWorks from './Pages/HowItWorks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/help',
    element: <Help />,
  },
  {
    path: '/listing',
    element: <Listing />,
  },
  {
    path: '/parking-details',
    element: <ParkingDetails />,
  },
  {
    path: '/parkner-signup',
    element: <ParknerSignup />,
  },
  {
    path: '/user-signup',
    element: <UserSignup />,
  },
  {
    path: '/how-it-works',
    element: <HowItWorks />,
  },
  {
    path: '/dashboard/*',
    element: (
      <DashboardRoute>
        <Dashboard />
      </DashboardRoute>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

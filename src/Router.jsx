import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import { ContactScreen, ErrorScreen, HelpScreen, HomeScreen, HowItWorksScreen, ListingScreen, SignupParknerScreen, SignupUserScreen } from './Screens'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorScreen />,
      children: [
        {
          path: '/',
          element: <HomeScreen />,
        },
        {
          path: '/how-it-works',
          element: <HowItWorksScreen />,
        },
        {
          path: '/listing',
          element: <ListingScreen />,
        },
        {
          path: '/contact',
          element: <ContactScreen />,
        },
        {
          path: '/help',
          element: <HelpScreen />,
        },
        {
          path: '/signup',
          element: <SignupUserScreen />,
        },
        {
          path: '/parkner-signup',
          element: <SignupParknerScreen />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router

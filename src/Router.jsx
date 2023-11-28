import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import { ContactScreen, HomeScreen, HowItWorksScreen, ListingScreen } from './Screens'
import ErrorScreen from './Screens/ErrorScreen'

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
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router

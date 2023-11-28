import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import { HomeScreen, HowItWorksScreen } from './Screens'
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
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router

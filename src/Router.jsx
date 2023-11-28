import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import { HomeScreen } from './Screens'
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
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ContactScreen, HelpScreen, HomeScreen, HowItWorksScreen, ListingScreen } from './Screens'
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
          path: '/listings',
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
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'

import UserBoard from './components/Dashboard/UserBoard'
import BookHistory from './components/Dashboard/UserBoard/BookHistory'
import Bookings from './components/Dashboard/UserBoard/Bookings'
import Notifications from './components/Dashboard/UserBoard/Notifications'
import PaymentMethods from './components/Dashboard/UserBoard/PaymentMethods'
import Profile from './components/Dashboard/UserBoard/Profile'
import PrivateRoute from './components/PrivateRoute'
import {
  ContactScreen,
  ErrorScreen,
  HelpScreen,
  HomeScreen,
  HowItWorksScreen,
  ListingScreen,
  SignupUserScreen,
} from './Screens'
import DashboardUserScreen from './Screens/DashboardUserScreen'

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />} errorElement={<ErrorScreen />}>
          <Route index="*" element={<HomeScreen />} />
          <Route path="how-it-works" element={<HowItWorksScreen />} />
          <Route path="listing" element={<ListingScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="help" element={<HelpScreen />} />
          <Route path="signup" element={<SignupUserScreen />} />
          {/* <Route path="parkner-signup" element={<SignupParknerScreen />} /> */}

          <Route
            path="dashboard/*"
            element={
              <PrivateRoute>
                <DashboardUserScreen />
              </PrivateRoute>
            }
            errorElement={<ErrorScreen />}
          >
            <Route index element={<UserBoard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="book-history" element={<BookHistory />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default Router

import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <aside>
      <div className="list-group">
        <NavLink
          to="profile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </NavLink>
        <NavLink
          to="bookings"
          className="list-group-item list-group-item-action"
        >
          My Bookings
        </NavLink>
        <NavLink
          to="payment-methods"
          className="list-group-item list-group-item-action"
        >
          Payment Methods
        </NavLink>
        <NavLink
          to="book-history"
          className="list-group-item list-group-item-action"
        >
          Booking History
        </NavLink>
        <NavLink
          to="notifications"
          className="list-group-item list-group-item-action"
        >
          Notifications
        </NavLink>
      </div>
    </aside>
  )
}

export default SideBar

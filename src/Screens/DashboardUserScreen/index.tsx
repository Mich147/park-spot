import { Container } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import SideBar from '../../components/Dashboard/UserBoard/Sidebar'

function DashboardUserScreen() {
  return (
    <Container className="mt-5">
      <Link to="/dashboard">
        <h1 className="text-center">User Dashboard</h1>
      </Link>

      <div>
        <div className="row">
          <div className="col-lg-3">
            <SideBar />
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DashboardUserScreen

import { Route, Routes } from 'react-router-dom'
import Home from '../../Components/DashboardPages/Home'
import NavBar from '../../Components/NavBar'

function Dashboard() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default Dashboard

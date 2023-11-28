import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardRoute = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedin(true)
      }
      setCheckingStatus(false)
    })
  })

  if (checkingStatus) {
    return <h3>Loading...</h3>
  }

  if (loggedin) {
    return children
  }

  return (
    <section style={{ height: '80vh' }}>
      <div className="container">
        <h2>Permission Denied.</h2>
        <p>This page can only be view by an Admin user.</p>
        <br />
        <Link to="/">
          <button className="--btn">&larr; Back To Home</button>
        </Link>
      </div>
    </section>
  )
}

export default DashboardRoute

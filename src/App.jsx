import { Outlet } from 'react-router-dom'
// import Footer from './components/Footer'
// import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App

import { Outlet } from 'react-router-dom'

function ContentBar() {
  return (
    <main>
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default ContentBar

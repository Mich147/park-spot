import { useSelector } from 'react-redux'

function UserBoard() {
  const { user } = useSelector((state) => state.auth)

  return <h1>Hello {user.email} welcome back</h1>
}

export default UserBoard

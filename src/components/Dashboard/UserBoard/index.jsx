import { useSelector } from 'react-redux'

function UserBoard() {
  const { user } = useSelector((state) => state.auth)
  // console.log(user.user?.email)

  return <h1>Hello {user.user?.email} welcome back</h1>
}

export default UserBoard

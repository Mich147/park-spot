import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

function UserBoard() {
  const { user } = useSelector((state: RootState) => state.auth)

  return <h1>Hello {user?.email} welcome back</h1>
}

export default UserBoard

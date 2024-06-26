import { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'

function UserBoard() {
  const { user } = useSelector((state: RootState) => state.auth)

  return <h1>Hello {user?.email} welcome back</h1>
}

export default UserBoard

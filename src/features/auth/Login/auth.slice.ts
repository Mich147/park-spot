import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getTheUser as getTheUserApi,
  login as loginApi,
  logout as logoutApi,
} from '../../../services/apiAuth'
import { CredentialTypes } from '../../../types'

// type AuthState = {
//   status: string
//   isUserLoggedIn: boolean
//   error: string
//   user: {} | null
// }

const user = JSON.parse(
  localStorage.getItem('sb-krofhothmxsgykxijorf-auth-token') || 'null'
)

const initialState = {
  user: user ? user : null,
  status: ' idle',
  isUserLoggedIn: false,
  error: '',
  isLogout: false,
}

export const login = createAsyncThunk(
  'auth/login',
  async (user: CredentialTypes, thunkAPI) => {
    try {
      return await loginApi(user)
    } catch (error) {
      const message = (error as Error).message
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getTheUser = createAsyncThunk('auth/user', async () => {
  return await getTheUserApi()
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await logoutApi()
  } catch (error) {
    console.error(error)
    return thunkAPI.rejectWithValue((error as Error).message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset(state) {
      state.isUserLoggedIn = true
      state.status = 'idle'
      state.error = ''
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succes'
        state.isUserLoggedIn = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'error'
        state.isUserLoggedIn = false
        state.error = action.payload as string
        state.user = null
      })

      .addCase(getTheUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTheUser.fulfilled, (state, action) => {
        state.status = 'success'
        state.isUserLoggedIn = state.user !== null ? true : false
        state.user = action.payload
      })
      .addCase(getTheUser.rejected, (state, action) => {
        state.status = 'error'
        state.isUserLoggedIn = false
        state.error = action.payload as string
      })
      .addCase(logout.pending, (state) => {
        state.isLogout = true
      })

      .addCase(logout.fulfilled, (state) => {
        state.isLogout = true
        state.user = null
        state.isUserLoggedIn = false
      })
  },
})

export const { reset } = authSlice.actions

export default authSlice.reducer

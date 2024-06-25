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
  localStorage.getItem('sb-krofhothmxsgykxijorf-auth-token') || '{}'
)

const initialState = {
  user: localStorage.getItem('sb-krofhothmxsgykxijorf-auth-token')
    ? user
    : null,
  status: ' idle',
  isUserLoggedIn: false,
  error: '',
}

export const login = createAsyncThunk(
  'auth/login',
  async (user: CredentialTypes, thunkAPI) => {
    try {
      return await loginApi(user)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const getTheUser = createAsyncThunk('auth/user', async (_, thunkAPI) => {
  try {
    return await getTheUserApi()
  } catch (error) {
    console.error(error)
    return thunkAPI.rejectWithValue((error as Error).message)
  }
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
    clearError: (state) => {
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
        state.isUserLoggedIn = true
        state.user = action.payload
      })
      .addCase(getTheUser.rejected, (state, action) => {
        state.status = 'error'
        state.isUserLoggedIn = false
        state.error = action.payload as string
      })

      .addCase(logout.pending, (state) => {
        state.status = 'loading'
      })

      .addCase(logout.fulfilled, (state) => {
        state.status = 'success'
        state.user = null
        // localStorage.clear()
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload as string
      })
  },
})

export const { clearError } = authSlice.actions

export default authSlice.reducer

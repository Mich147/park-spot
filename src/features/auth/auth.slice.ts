import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getTheUser as getTheUserApi,
  login as loginApi,
  logout as logoutApi,
} from '../../services/apiAuth'
import { CredentialTypes } from '../../types'

const user = JSON.parse(
  localStorage.getItem('sb-krofhothmxsgykxijorf-auth-token') || '{}'
)

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isUserLoggedIn: false,
  isError: false,
  isLogout: false,
  message: '',
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
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isUserLoggedIn = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isUserLoggedIn = false
        state.message = action.payload as string
        state.isError = true
        state.user = null
      })
      .addCase(getTheUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTheUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isUserLoggedIn = state.user === null ? false : true
        state.user = action.payload
      })
      .addCase(getTheUser.rejected, (state, action) => {
        state.isLoading = false
        state.isUserLoggedIn = false
        state.message = action.payload as string
        state.user = null
      })
      .addCase(logout.pending, (state) => {
        state.isLogout = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLogout = false
        state.isUserLoggedIn = false
        state.user = action.payload
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLogout = false
        state.message = action.payload as string
        state.user = null
      })
  },
})

export default authSlice.reducer

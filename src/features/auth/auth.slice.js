import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getTheUser as getTheUserApi,
  login as loginApi,
  logout as logoutApi,
} from '../../services/apiAuth'

const user = JSON.parse(
  localStorage.getItem('sb-krofhothmxsgykxijorf-auth-token')
)

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isUserLoggedIn: null,
  isError: false,
  isLogout: false,
  message: '',
}
// const initialState = {
//   user: null,
//   isLoading: false,
//   message: '',
// }

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await loginApi(user)
  } catch (error) {
    console.error(error)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const getTheUser = createAsyncThunk('auth/user', async (thunkAPI) => {
  try {
    return await getTheUserApi()
  } catch (error) {
    console.error(error)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logout = createAsyncThunk('auth/logout', async (thunkAPI) => {
  try {
    return await logoutApi()
  } catch (error) {
    console.error(error)
    return thunkAPI.rejectWithValue(error.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: function reset() {},
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
        state.message = action.payload
        state.isError = true
        state.user = null
      })
      .addCase(getTheUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTheUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isUserLoggedIn = state.user === null ? null : true
        state.user = action.payload
      })
      .addCase(getTheUser.rejected, (state, action) => {
        state.isLoading = false
        state.isUserLoggedIn = false
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.pending, (state) => {
        // state.isLoading = true
        state.isLogout = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        // state.isLoading = false
        state.isLogout = false
        state.isUserLoggedIn = false
        state.user = action.payload
      })
      .addCase(logout.rejected, (state, action) => {
        // state.isLoading = false
        state.isLogout = false
        state.message = action.payload
        state.user = null
      })
  },
})

export default authSlice.reducer

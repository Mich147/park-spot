import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUser as createUserApi } from '../../../services/apiAuth'
import { CredentialTypes } from '../../../types'

const initialState = {
  status: 'idle',
  message: '',
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user: CredentialTypes, thunkAPI) => {
    try {
      return await createUserApi(user)
    } catch (error) {
      const message = (error as Error).message
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    reset(state) {
      state.status = 'idle'
      state.message = ''
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(registerUser.fulfilled, (state) => {
      state.status = 'success'
      localStorage.clear()
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = 'error'
      state.message = action.payload as string
    })
  },
})

export const { reset } = registerSlice.actions

export default registerSlice.reducer

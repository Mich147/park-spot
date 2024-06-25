import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUser as createUserApi } from '../../../services/apiAuth'
import { CredentialTypes } from '../../../types'

const initialState = {
  status: 'idle',
  error: '',
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user: CredentialTypes, thunkAPI) => {
    try {
      return await createUserApi(user)
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(registerUser.fulfilled, (state) => {
      state.status = 'success'
      localStorage.clear()
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.status = 'error'
      state.error = 'There is an error registering a user'
    })
  },
})

// export const {} = registerSlice.actions

export default registerSlice.reducer

import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/auth/Login/auth.slice'
import registerReducer from '../features/auth/Register/register.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './rootReducer'

// const store = configureStore({
//   reducer: rootReducer,
// })

// export type AppDispatch = typeof store.dispatch
// export default store

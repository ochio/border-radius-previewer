import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import radiusReducer from "../features/radius/radiusSlice"

export const store = configureStore({
  reducer: {
    radius: radiusReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

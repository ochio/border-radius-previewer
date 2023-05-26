import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export type BorderRadiusState = {
  topLeft: number
  topRight: number
  bottomLeft: number
  bottomRight: number
}

const initialState: BorderRadiusState = {
  topLeft: 0,
  topRight: 0,
  bottomLeft: 0,
  bottomRight: 0,
}

export const radiusSlice = createSlice({
  name: "radius",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    adjustment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return { ...state, ...action.payload }
    },
  },
})

export const { adjustment } = radiusSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRadius = (state: RootState) => state.radius

export default radiusSlice.reducer

import { configureStore } from "@reduxjs/toolkit"
import notesReducer from "./reducers/notesSlice"
import detailReducer from "./reducers/detailSlice"

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    detail: detailReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

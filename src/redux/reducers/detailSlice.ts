import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { NotesInitalState } from "./notesSlice"

const initialState: NotesInitalState = {
  id: 0,
  notes: "",
  date: ""
}

export const detailSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {
    setDetail: (state, action: PayloadAction<NotesInitalState>) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { setDetail } = detailSlice.actions
export const detailSelector = (state: RootState) => state.detail
export default detailSlice.reducer

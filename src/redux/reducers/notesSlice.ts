import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import AsyncStorage from "@react-native-async-storage/async-storage"

export interface NotesInitalState {
  id: number
  notes: string
  date: string
}

const initialState: NotesInitalState[] = []

export const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    setNotes: (state, action) => {
      return [...action.payload]
    },
    saveNotes: (state, action) => {
      const maxId = state.length > 0 ? Math.max(...state.map(val => val.id)) : 0
      state.push({
        ...action.payload,
        id: maxId + 1
      })
      AsyncStorage.setItem("notes", JSON.stringify(state))
    },
    editNotes: (state, action: PayloadAction<NotesInitalState>) => {
      const index = [...state].findIndex(x => x.id === action.payload.id)
      state[index] = action.payload
      AsyncStorage.setItem("notes", JSON.stringify(state))
    }
  }
})

export const { setNotes, saveNotes, editNotes } = notesSlice.actions
export const notesSelector = (state: RootState) => state.notes
export default notesSlice.reducer

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AlertColor} from "@mui/material";

export interface ToastState {
  time: number,
  open: boolean,
  text?: string,
  severity?: AlertColor
}

const initialState: ToastState = {
  open: false,
  time: 3000,
  severity: "success"
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<{text: string, severity?: AlertColor}>) => {
      state.open = true
      state.text = action.payload.text
      if (action.payload.severity) {
        state.severity = action.payload.severity
      }
    },
    onClose:(state) => {
      state.open = false
    },

  },
})

export const { setVisible, onClose } = toastSlice.actions

export default toastSlice.reducer